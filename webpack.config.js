// ----------------------
// Modules
// ----------------------

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');



// ----------------------
// Helpers
// ----------------------

function absPath (value) {
    return path.join(__dirname, value);
}



// ----------------------
// Config
// ----------------------

module.exports = {

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    devServer: {
        static: absPath('dist'),
        compress: true,
        port: 49041
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'planetary-system.css'
        })
    ],

    resolve: {
        alias: {
            '@': absPath('src')
        }
    },

    output: {
        library: 'PlanetarySystem',
        libraryTarget: 'umd',
        libraryExport: 'default',
        filename: 'planetary-system.js'
    },

    devtool: 'source-map'

};
