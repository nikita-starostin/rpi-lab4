const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DefinePlugin = require('webpack/lib/DefinePlugin');

require('dotenv').config();

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    plugins: [
        new DefinePlugin({
            'process.env': {
                NEWS_API_TOKEN: JSON.stringify(process.env.NEWS_API_TOKEN)
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Lab 4',
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],

    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
};
