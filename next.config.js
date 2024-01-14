/** @type {import('next').NextConfig} */

// Update the ESLint configuration to include the next.config.js file in the parserOptions.project property of the tsconfig.json file.
// For example, if the tsconfig.json file is located at /users/jonathan/apps/personal/freelance/pacific-fire-engineering/tsconfig.json, you can add the following line:
// // tsconfig.json
// {
//   "compilerOptions": {
//     // ...
//   },
//   "include": [
//     "next.config.js"
//   ]
// }

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
