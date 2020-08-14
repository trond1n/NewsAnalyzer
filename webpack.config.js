const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: {
        index: './src/script/index.js',
        about: './src/script/about.js',
        paper: './src/script/paper.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './scripts/[name].[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: { loader: "babel-loader" },
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [
                isDev ? 'style-loader'
                    : {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: '../', },
                    },
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                    },
                },
                'postcss-loader',
            ]
        },
        {
            test: /\.(eot|ttf|woff|woff2)$/,
            loader: 'file-loader?name=./vendor/[name].[ext]'
        },
        {
            test: /\.(png|jpg|gif|ico|svg)$/i,
            use: [{
                loader: 'file-loader',
                options: {
                    name: './images/[name].[ext]',
                    useRelativePath: true,
                    esModule: false,
                }
            },
            {
                loader: 'image-webpack-loader',
                options: {}
            },
            ]
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            minify: false,
            hash: true,
            template: './src/index.html',
            chunks: ['index'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            minify: false,
            hash: true,
            template: './src/about.html',
            chunks: ['about'],
            filename: 'about.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            minify: false,
            hash: true,
            template: './src/paper.html',
            chunks: ['paper'],
            filename: 'paper.html'
        }),
        new MiniCssExtractPlugin({
            filename: './pages/[name].[contenthash].css',

        }),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            BASE_URL: JSON.stringify(
            ),
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default'],
            },
            canPrint: true
        }),
        new WebpackMd5Hash()

    ]
};