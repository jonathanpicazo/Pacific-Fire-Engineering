import React from 'react';

type HeadingProps = {
  title: string;
};

const Heading: React.FC<HeadingProps> = ({ title }) => (
  <h1 className="mb-2 text-2xl text-primary md:mb-5 md:text-3xl">{title}</h1>
);

export default Heading;
