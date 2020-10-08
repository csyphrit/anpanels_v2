var path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UnusedWebpackPlugin = require('unused-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                { loader: MiniCssExtractPlugin.loader },
                { loader: 'css-loader', options: { importLoaders: 2 }},
                { loader: 'sass-loader' }
            ],
        },
        {
            test: /\.css$/i,
            use: [
                { loader: MiniCssExtractPlugin.loader },
                { loader: 'css-loader', options: { importLoaders: 1 }},
            ],
        },
        {
            test: /\.(jpe?g|png|gif)$/,
            use: [{
                /* inline if smaller than 10 KB, otherwise load as a file */
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }]
        },
        { 
            test: /\.(eot|svg|ttf|woff2?|otf)$/,
            use: 'file-loader'
        },
      ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
        new OptimizeCssAssetsPlugin({}),
        new UnusedWebpackPlugin({
            directories: [path.join(__dirname, 'src')],
            exclude: ['*.test.js']
        })
    ]
};