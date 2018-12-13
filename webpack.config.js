const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/index.js',
    output: {
        filename: isProduction ? 'bundle.[hash].js' : 'bundle.js',
        path: __dirname + '/dist',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: "javascript/auto",
            }
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin(['GIT_TOKEN'])
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx', '.mjs']
    },
    devServer: {
        contentBase: './dist',
        hot: true
    }
  }