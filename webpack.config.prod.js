import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/index'),
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'babel-loader' },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: { sourceMap: true }
            }
          ]
        })
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      { test: /\.(woff|woff2)$/, options: { prefix: 'font/', limit: 5000 }, loader: 'url-loader' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, options: { limit: 10000, mimetype: 'application/octet-stream' }, loader: 'url-loader' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, options: { limit: 10000, mimetype: 'image/svg+xml' }, loader: 'url-loader' }
    ]
  }
};
