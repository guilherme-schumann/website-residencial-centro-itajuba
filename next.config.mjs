/** @type {import('next').NextConfig} */

// Em GitHub Pages (project pages) o site é servido em https://usuario.github.io/<repo>/
// O workflow de deploy define NEXT_PUBLIC_BASE_PATH = /<repo> automaticamente.
// Localmente (dev/build) fica vazio e o site roda na raiz.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
