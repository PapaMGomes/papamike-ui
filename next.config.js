/** @type {import('next').NextConfig} */

const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')

console.log(`[NEXT_CONFIG]: ${process.env.NODE_ENV}`)
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: process.env.NODE_ENV.trim() == 'development'
}

module.exports = withPlugins([
    [nextConfig],
    [
        withImages,
        {
            esModule: true,
            images: { disableStaticImages: true }
        }
    ]
])
