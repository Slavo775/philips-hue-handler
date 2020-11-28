const path = require('path');
const eslintWebpackPlugin = require('eslint-webpack-plugin')
const options = {
    extensions: ['ts', 'js']
}

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', 'html']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new eslintWebpackPlugin(options)],
    watch: true
};
