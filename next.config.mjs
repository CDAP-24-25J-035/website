// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // basePath: isProd ? '/website' : '',
  // assetPrefix: isProd ? '/website/' : '',
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }
};

export default nextConfig;
