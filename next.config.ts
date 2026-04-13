/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- Agregá esto para generar la carpeta "out"
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;