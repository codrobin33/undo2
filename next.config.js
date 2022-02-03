console.log('NODE ENV: ', process.env.NODE_ENV, process.env.NODE_ENV === 'production')


const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    // Use the CDN in production and localhost for development.
    assetPrefix: isProd ? 'https://undo.today/' : '',
    trailingSlash: isProd ? true : false,
    images: {
        loader: 'imgix',
        path: 'https://undo.imgix.net'
    }
};