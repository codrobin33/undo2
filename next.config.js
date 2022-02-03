console.log('NODE ENV: ', process.env.NODE_ENV, process.env.NODE_ENV === 'production')


const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    // Use the CDN in production and localhost for development.
    env: {
        img_url: isProd ? '/' : ''
    },
    trailingSlash: isProd ? true : false,
    images: {
        loader: 'imgix',
        path: 'https://undo.imgix.net'
    }
};