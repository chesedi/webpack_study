// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none',
  // entry: './src/index.js',
  entry: './index.js',
  output: { // 객체 형태로 옵션들을 추가해야 함
    filename: 'bundle.js',
    // filename: '[name].bundle.js' (entry 속성 포함)
    // filename: '[id].bundle.js' (webpack 모듈 id 포함)
    // filename: '[name].[hash].bundle.js' (매 빌드시 마다 고유 해시 값을 붙이는 옵션)
    // filename: '[chunkhash].bundle.js' (웹팩의 각 모듈을 기준으로 해시 값을 붙이는 옵션)
    path: path.resolve(__dirname, 'dist') //path.resolve() 코드는 인자로 넘어온 경로들을 조합하여 유효한 파일 경로를 만들어주는 Node.js API입니다.
  },
  // 웹팩이 웹 애플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(HTML, CSS, Images, 폰트 등)들을 변환할 수 있도록 도와주는 속성
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader'
        ]
      }
    ]
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    port: 9000,
    hot: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: 'index.html',
    }),
    // new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin()
  ]
};