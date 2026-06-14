/** @type {import('next').Config} */
const nextConfig = {
  // Mengatur output ke mode static export (wajib untuk GitHub Pages)
  output: 'export', 
  
  // Beritahu Next.js kalau kamu menggunakan sub-folder /portofolio
  basePath: '/portofolio',
  assetPrefix: '/portofolio/',

  // Opsional: Jika kamu menggunakan komponen <Image /> bawaan Next.js
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;