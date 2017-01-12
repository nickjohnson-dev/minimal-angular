var path = require('path');
var webpack = require('webpack');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: './src/public',
    historyApiFallback: true,
    stats: 'minimal',
  },
  devtool: 'eval-source-map',
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts',
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader?inlineSourceMap=true&sourceMap=false',
        ],
        exclude: [
          /\.(spec|e2e)\.ts$/,
          /node_modules\/(?!(ng2-.+))/,
        ],
      },
    ]
  },
  output: {
    chunkFilename: '[id].chunk.js',
    filename: 'js/[name].js',
    path: root('dist'),
    publicPath: 'http://localhost:8080/',
  },
  plugins: [
    new CommonsChunkPlugin({
      name: [
        'vendor',
        'polyfills',
      ],
    }),
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      chunksSortMode: 'dependency',
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      root('./src')
    ),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
  },
};

function root(args) {
  const separatedArgs = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(separatedArgs));
}
