const HTMLWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        filename:'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
          },
          {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [
              
              {
                loader: 'file-loader',
                options:{
                  name:'[name].[ext]',
                  outputPath: 'img/',
                  useRelativePath: true
                }
                
              }
            ]
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          /* { test: /\.(png|jpg|jpeg|woff|woff2|eot|ttf)$/, 
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                },
              },
            ], } */
        ],
      },
    plugins: [
        new HTMLWebPackPlugin({
            template: 'src/index.html'
        }),
        
    ],
    mode: 'development',

}