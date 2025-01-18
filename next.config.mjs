/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "adelaar-transport.netlify.app",
			},
		],
	},

  };
  
  export default nextConfig;