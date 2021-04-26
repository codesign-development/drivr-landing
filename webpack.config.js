const HTMLWebPackPlugin = require('html-webpack-plugin')

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
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          { test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                },
              },
            ], }
        ],
      },
    plugins: [
        new HTMLWebPackPlugin({
            template: 'src/index.html'
        })
    ],
    mode: 'development',

}