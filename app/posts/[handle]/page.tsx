/* eslint-disable react/destructuring-assignment */
import React from 'react';
import clsx from 'clsx';
import { notFound } from 'next/navigation';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Heading, ImageContentful } from '@/components';
import { layoutContainerClassNames } from '@/utils/tw';
import { BlogPost } from '@/types/contentful';

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const PAGINATION_LIMIT = 10;

const getPosts = async (): Promise<BlogPost[]> => {
  try {
    const url = `https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&content_type=blogPost&include=${PAGINATION_LIMIT}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch posts, status: ${response.status}`);
    }
    const data = await response.json();
    return data.items.map((item: { fields: any }) => item.fields);
  } catch (error) {
    return [];
  }
};

export const generateStaticParams = async () => {
  try {
    const posts = await getPosts();
    return posts.map((post) => ({
      handle: post.handle,
    }));
  } catch (error) {
    return [];
  }
};

const getAssetUrlsFromRichText = (richText: any): string[] => {
  try {
    return richText.reduce((acc: string[], node: any) => {
      if (node.nodeType === 'embedded-asset-block') {
        acc.push(node.data.target.sys.id);
      }
      return acc;
    }, []);
  } catch (error) {
    return [];
  }
};
const getAssetById = async (assetId: string): Promise<any> => {
  try {
    const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/assets/${assetId}?access_token=${accessToken}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch asset, status: ${response.status}`);
    }
    const data = await response.json();
    return data.fields;
  } catch (error) {
    return null;
  }
};

const getPostByHandle = async (handle: string): Promise<BlogPost | null> => {
  try {
    const url = `https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&content_type=blogPost&fields.handle=${handle}&include=1`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch post, status: ${response.status}`);
    }
    const data = await response.json();
    if (data.items.length === 0) {
      throw new Error(`Post with handle "${handle}" not found.`);
    }
    const post = data.items[0].fields;
    const assetIds = getAssetUrlsFromRichText(post.body.content);

    const assets: Record<string, any> = {};
    if (assetIds.length > 0) {
      const assetResponses = await Promise.all(
        assetIds.map(async (id) => {
          try {
            const asset = await getAssetById(id);
            return { id, asset };
          } catch (error) {
            return { id, asset: null };
          }
        })
      );

      assetResponses.forEach(({ id, asset }) => {
        if (asset !== null) {
          assets[id] = asset;
        }
      });
    }

    return {
      ...post,
      assets,
    };
  } catch (error) {
    return null;
  }
};

type Props = {
  params: {
    handle: string;
  };
};

export default async function Page({ params }: Props) {
  const post = await getPostByHandle(params.handle);
  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl">
      <div className={clsx(layoutContainerClassNames)}>
        <div className="mb-3 flex items-center justify-between">
          <Heading title={post.title} />
          <div>
            <span className="block text-sm text-gray-500">
              Published:{' '}
              {new Date(post.publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {post.tags &&
                post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mr-2 rounded bg-primary-lightest px-2.5 py-0.5 text-xs font-semibold text-primary-dark"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>

        <div className="prose mx-auto max-w-full">
          {documentToReactComponents(post.body, {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
                if (post.assets && post.assets[node.data.target.sys.id]) {
                  const asset = post.assets[node.data.target.sys.id];
                  return (
                    <div className="relative my-6 aspect-video">
                      <ImageContentful
                        url={`https:${asset.file.url}`}
                        altText={asset.description}
                      />
                    </div>
                  );
                }
                return children;
              },
            },
          })}
        </div>
      </div>
    </main>
  );
}
