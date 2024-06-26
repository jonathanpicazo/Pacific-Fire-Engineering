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
    loader: 'custom',
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ['next-image-export-optimizer'],
  env: {
    nextImageExportOptimizer_imageFolderPath: 'public/images',
    nextImageExportOptimizer_exportFolderPath: 'out',
    nextImageExportOptimizer_quality: '75',
    nextImageExportOptimizer_storePicturesInWEBP: 'true',
    nextImageExportOptimizer_exportFolderName: 'nextImageExportOptimizer',

    // If you do not want to use blurry placeholder images, then you can set
    // nextImageExportOptimizer_generateAndUseBlurImages to false and pass
    // `placeholder="empty"` to all <ExportedImage> components.
    nextImageExportOptimizer_generateAndUseBlurImages: 'true',

    // If you want to cache the remote images, you can set the time to live of the cache in seconds.
    // The default value is 0 seconds.
    nextImageExportOptimizer_remoteImageCacheTTL: '0',
  },
};

module.exports = nextConfig;
