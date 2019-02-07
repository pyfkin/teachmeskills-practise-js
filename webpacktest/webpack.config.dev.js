const path = require('path');

const conf = {
    // extends : './webpack.config.common.js',
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "main.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
        },
            {
                test : /\.css$/,
                use : [
                    "style-loader",
                    "css-loader"
                ]
            }]
    },
    devServer: {
        port: 8080,
        overlay: true,
    },
    devtool: "source-map"
};

module.exports = conf;