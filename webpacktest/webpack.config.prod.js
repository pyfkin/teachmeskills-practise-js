const path = require('path');

const conf = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "main.js"
    },
    module: {
        rules: [
            {
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
    }
};

module.exports = conf;