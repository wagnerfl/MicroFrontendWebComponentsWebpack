const path = require("path");

module.exports = {
    mode: 'development',
    entry: {
      button_example: './src/components/Button'
    },
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
        extensions: [".ts", ".tsx", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'components.js',
        // filename: '[name].js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,  // Porta padrão, ajuste conforme necessário
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*", // Allow requests from any origin
        },
        hot: true, // Enable hot module replacement
    },
}
