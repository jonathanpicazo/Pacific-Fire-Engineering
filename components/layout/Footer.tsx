import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { layoutContainerClassNames } from '@/utils/tw';

const Footer: React.FC = () => (
  <footer>
    <div className="mt-6 bg-primary text-white md:mt-9">
      <div className={clsx(layoutContainerClassNames, 'py-3')}>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm">
          <span>&copy; {new Date().getFullYear()}</span>
          <span>Pacific Fire Engineering - All Rights Reserved.</span>
          <div>
            <span>Website by: </span>
            <Link
              className="hover:underline"
              href="https://jonathanpicazo.com/"
              target="_blank"
            >
              <span>Jonathan Picazo</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
