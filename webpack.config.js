const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    }
}
