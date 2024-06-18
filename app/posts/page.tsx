import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Heading } from '@/components';
import { siteName } from '@/utils/const';
import { layoutContainerClassNames } from '@/utils/tw';
import { BlogPost } from '@/types/contentful';

export const metadata = {
  title: `Blogs | ${siteName}`,
};

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

export default async function Page() {
  const posts = await getPosts();
  return (
    <main>
      <div className={clsx(layoutContainerClassNames)}>
        <Heading title="Blog" />
        {posts.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.handle}
                href={`/posts/${post.handle}`}
                className="block rounded-lg border-2 border-primary p-6 shadow-sm"
              >
                <h2 className="mb-2 text-2xl font-semibold">{post.title}</h2>
                <p className="text-gray-700">{post.description}</p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="p-6 text-center text-gray-500">No posts available.</p>
        )}
      </div>
    </main>
  );
}
