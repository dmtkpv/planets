// ----------------------
// Modules
// ----------------------

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



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
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },

    devServer: {
        static: 'dist',
        compress: true,
        port: 49041
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'planetary-system.css'
        })
    ],

    output: {
        library: 'PlanetarySystem',
        libraryTarget: 'umd',
        libraryExport: 'default',
        filename: 'planetary-system.js'
    },

    devtool: 'source-map'

};
