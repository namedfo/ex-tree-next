/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ex24images.b-cdn.net',
            },
        ],
    }
}

export default nextConfig
