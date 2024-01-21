import React from 'react';
import clsx from 'clsx';

type HeadingProps = {
  title: string;
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({ title, className = '' }) => (
  <h1
    className={clsx(
      'mb-3 text-2xl text-primary md:mb-5 md:text-3xl',
      className
    )}
  >
    {title}
  </h1>
);

export default Heading;
