const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
    },
    devServer: {
        port: 8080,
        open: true,
        compress: true,
        liveReload: true,
        watchFiles: ["./src/*.html"],
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(jpe?g|png|svg)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:6].[ext]',
                            outputPath: 'images/',
                            publicPath: 'images/',
                            emitFile: true,
                            esModule: false
                        }
                    }
                ]
            },
        ]
    }
};
