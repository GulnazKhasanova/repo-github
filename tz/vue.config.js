module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/assets/scss/style.scss";`,
            },
        },
    },
    chainWebpack: config => {
        config.module
            .rule("fonts")
            .test(/\.(ttf|otf|eot|woff|woff2)$/)
            .use("file-loader")
            .loader("file-loader")
            .tap(options => {
                options = {
                    // limit: 10000,
                    name: '/assets/inglobal/[name].[ext]',
                }
                return options
            })
            .end()
    }

}