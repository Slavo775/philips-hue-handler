const path = require('path')
const eslintWebpackPlugin = require('eslint-webpack-plugin')
const options = {
    context: './src/',
    extensions: ['ts', 'js'],
}

module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'src')],
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', 'html'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new eslintWebpackPlugin(options)],
    watch: true,
    watchOptions: {
        poll: true,
        ignored: /node_modules/,
    },
    devServer: {
        hot: true,
        inline: true,
        https: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
    },
}
