
require('@babel/polyfill')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const isProduction = process.argv.join('').includes('production')
const isDevelopment = !isProduction

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: ['@babel/polyfill', '@/public/index.js'],
    output: {
        publicPath: '/',
        filename: 'js/[name].[cpntenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.scss', '.css', '.json', '.img', 'png', '.vue'],
        alias: {
            vue: 'vue/dist/vue.js',
            '~': path.resolve(__dirname, 'src'),
            '@': path.resolve(__dirname, 'src'),
            comp: path.resolve(__dirname, 'src/public/components/index')
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: {
                        removeComments: false,
                        collapseWhitespace: false,
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    },
                    'css-loader',
                    'sass-loader',
                ],

            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|gif|jpe|jpg|svg)(\?.*$|$)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 100000,
                            outputPath: 'img/',
                            esModule: false
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf)(\?.*$|$)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 100000,
                            publicPath: !isProduction ? '/' : '/src',
                            outputPath: 'font/',
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 10000,
            maxSize: 1000000,
        },
        minimize: isProduction,
        minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            template: 'public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name][hash].css',
            chunkFilename: 'css/[id][hash].css',
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        overlay: true,
        proxy: {
            '**': {
                target: 'http://localhost:3000/',
                secure: false,
                changeOrigin: true,
            },
        },
    },
}