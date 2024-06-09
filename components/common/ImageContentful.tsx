'use client';

import React from 'react';
import Image from 'next/image';

type Props = {
  url: string;
  altText: string;
};

const imageLoader = () => '';

const ImageContentful: React.FC<Props> = ({ url, altText }) => (
  <Image src={url} alt={altText} unoptimized loader={imageLoader} fill />
);

export default ImageContentful;
