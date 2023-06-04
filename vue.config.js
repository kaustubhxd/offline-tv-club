module.exports = {
    publicPath: process.env.NODE_ENV === 'production'    ? '/offlinetv-club/'    : '/',
    css: {
        loaderOptions: {
          sass: {
            prependData: `@import "@/assets/global.scss";`
          }
        }
      },
      productionSourceMap: false, // Previously set as true
}
