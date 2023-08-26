/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['cdn.sanity.io']
    }
}

module.exports = nextConfig
