const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const PUBLIC_DIR = 'public';
const webpack = require('webpack');

module.exports= {
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        hot:true,
        compress: true,
        port: 9000,
    },
    entry:path.resolve(__dirname, 'src', 'main.js'),
    mode:'development',
    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: 'defaults' }]
                        ],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                exclude:/node_modules/,
                test: /\.css$/i,
                use: [
                    {loader:'style-loader'},
                    {
                        loader:'css-loader',
                         
                    }
                ],
            },
        ]
    },
    output:{
        filename:'[name]-[hash].js',
        path:path.resolve(__dirname, 'dist')
    }, 
    plugins:[
        new HTMLWebpackPlugin({
            template:path.resolve(__dirname,    PUBLIC_DIR, 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    target:'web'
};
