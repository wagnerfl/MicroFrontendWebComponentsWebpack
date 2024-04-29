const path = require("path");

module.exports = {
    mode: 'development',
    entry: {
      module_example: './src/AppWebComponents'
    },
    module: {
        rules: [
            {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['css-loader']
            },
            {
                test: /\.svg$/i,
                type: 'asset',
                resourceQuery: /url/,
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: { not: [/url/] },
                use: ['@svgr/webpack'],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'module.js',
        // filename: '[name].js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8081,  // Porta padrão, ajuste conforme necessário
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*", // Allow requests from any origin
        },
        hot: true, // Enable hot module replacement
    },
}
