/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    
    webpack(config) {
    config.module.rules.push({
      test: /\.(pdf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/pdf/[hash][ext][query]',
      },
    });

    return config;
  },
    
}

module.exports = nextConfig
