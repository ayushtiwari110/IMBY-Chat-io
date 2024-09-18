/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xxvxuzzcafpxmncolrxk.supabase.co',
      },
    ],
  },
};

export default nextConfig;
