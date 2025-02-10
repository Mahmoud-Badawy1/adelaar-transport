/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "adelaar-transport.netlify.app", // Your remote host
        },
      ],
    },
  };
  
  export default nextConfig;