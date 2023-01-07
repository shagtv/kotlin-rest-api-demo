const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: "./src/main/resources/static/tsx/index.tsx",
    mode: "development",
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
    }
}
