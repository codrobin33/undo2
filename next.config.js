console.log('NODE ENV: ', process.env.NODE_ENV, process.env.NODE_ENV === 'production')


const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    // Use the CDN in production and localhost for development.
    assetPrefix: isProd ? 'https://codrobin33.github.io/undo2/' : '',
    basePath: isProd ? '/undo2' : '',
    env: {
        css_url: isProd ? '/undo2/' : ''
    },
    trailingSlash: isProd ? true : false
};