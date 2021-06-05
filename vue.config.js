module.exports = {
    publicPath: process.env.NODE_ENV === 'production'    ? '/offlineTV/'    : '/',
    css: {
        loaderOptions: {
          sass: {
            prependData: `@import "@/assets/global.scss";`
          }
        }
      },
      productionSourceMap: false, // Previously set as true
}
