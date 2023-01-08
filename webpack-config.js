const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
    // devtool: 'source-map',
    entry: "./src/main/resources/static/tsx/index.tsx",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "./src/main/resources/static/js/"),
        filename: "./app-bundle.js"
    },
    resolve: {
        extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            parallel: true,
            terserOptions: {
                compress: true,
                format: {
                    comments: false,
                },
            },
            extractComments: false,
        })],
    },
}
