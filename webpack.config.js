const path = require('path');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const {extendDefaultPlugins} = require('svgo');
const TerserPlugin = require('terser-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const optimization = (isProd) => {

  const config = {
    minimize: isProd,
  }

  if (isProd) {
    config.minimizer = [
      new TerserPlugin(),
      new HtmlMinimizerPlugin(),
    ]
  }

  return config;
}

module.exports = (env) => {
  const isDev = env.mode === 'development';
  const isProd = !isDev;

  return {
    entry: './src/index.tsx',
    mode: isProd ? 'production' : isDev && 'development',
    output: {
      filename: 'js/bundle.js',
      path: path.resolve(__dirname, 'public'),
      clean: true,
    },
    devtool: isDev ? 'eval-cheap-module-source-map' : false,
    resolve: {
      modules: [path.resolve(__dirname, 'src'), path.resolve('node_modules')],
      extensions: ['.js', '.ts', '.tsx']
    },
    optimization: optimization(isProd),
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      watchContentBase: true,
      historyApiFallback: true,
      hot: true,
      open: false,
      port: 1337,
    },
    module: {
      rules: [
        {
          test: /\.(html)$/,
          type: 'asset',
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                emitFile: false,
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset',
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                emitFile: false,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new ImageMinimizerPlugin({
        minimizerOptions: {
          plugins: [
            ['gifsicle', {interlaced: true}],
            ['mozjpeg', {quality: 63}],
            ['optipng', {optimizationLevel: 5}],
            [
              'svgo',
              {
                plugins: extendDefaultPlugins([
                  {
                    name: 'removeViewBox',
                    active: false,
                  },
                  {
                    name: 'addAttributesToSVGElement',
                    params: {
                      attributes: [{xmlns: 'http://www.w3.org/2000/svg'}],
                    },
                  },
                ]),
              },
            ],
          ],
        },
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src', 'index.html'),
            to: path.resolve(__dirname, 'public'),
          },
          {
            from: 'src/assets/img',
            to: 'img',
            noErrorOnMissing: true,
          },
          {
            from: 'src/assets/fonts',
            to: 'fonts',
            noErrorOnMissing: true,
          },
        ],
      }),
      new ForkTsCheckerWebpackPlugin(),
    ],
  };
};
