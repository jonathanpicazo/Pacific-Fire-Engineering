import { Document } from '@contentful/rich-text-types';

export type ContentfulImage = {
  url: string;
  title: string;
  description?: string;
  file: {
    url: string;
    details: {
      size: number;
      image: {
        width: number;
        height: number;
      };
    };
    fileName: string;
    contentType: string;
  };
};

type ContentfulAsset = {
  title: string;
  description: string;
  file: {
    url: string;
    details: any;
    fileName: string;
    contentType: string;
  };
};

export type Author = {
  name: string;
  image: ContentfulImage;
};

export type BlogPost = {
  title: string;
  author: Author;
  handle: string;
  image: ContentfulImage;
  body: Document;
  description: string;
  publishedDate: string;
  tags: string[];
  assets?: Record<string, ContentfulAsset>;
};
