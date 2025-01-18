/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "adelaar-transport.netlify.app", // Your remote host
        },
      ],
    },
  };
  
  export default nextConfig;