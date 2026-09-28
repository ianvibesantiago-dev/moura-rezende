import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Fotos placeholder do Unsplash (licença livre). Troque pelas fotos reais dos imóveis.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
