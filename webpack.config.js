const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    // 指定编译上下文
    context: path.resolve(process.cwd(), "src"),
    entry: {
        app: './app.js'
    },
    output: {
        publicPath: "/dist",
        path: path.resolve(process.cwd(), 'dist'),
        filename: '[name].js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'index',
            template: './webpack-template.html',
            inject: true
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'scss-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.san$/,
                loader: 'san-loader'
            }
        ]
    }
}