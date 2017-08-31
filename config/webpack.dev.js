const path = require('path');
const pkg = require('../package.json');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  name: 'marked-it',
  target: 'web',
  entry: [
    require.resolve('babel-polyfill'),
    require.resolve('../src/index.js')
  ],
  devtool: 'cheap-module-inline-source-map',
  context: process.cwd(),
  output: {
    publicPath: '/',
    path: path.resolve('public'),
    pathinfo: true,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(path.join(process.cwd(), 'node_modules'))
    ].concat(process.env.NODE_PATH.split(path.delimiter).filter(Boolean)),
    extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx'],
    alias: {
      'react-native': 'react-native-web'
    }
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]'
            }
          },
          {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, '../src'),
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                query: {
                  cacheDirectory: true,
                  babelrc: false,
                  presets: [
                    [
                      'env',
                      {
                        targets: {
                          browsers: pkg.browserslist,
                          uglify: true
                        },
                        modules: false,
                        useBuiltIns: false,
                        debug: false
                      }
                    ],
                    'stage-2',
                    'react'
                  ],
                  plugins: [
                    ['transform-react-jsx-source', 'transform-react-jsx-self']
                  ]
                }
              }
            ]
          },
          {
            test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1
                }
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9' // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009'
                    })
                  ]
                }
              }
            ]
          },
          {
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      'process.env.BROWSER': true,
      __DEV__: true
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(process.cwd(), 'src/index.html')
    }),
    new CaseSensitivePathsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CopyWebpackPlugin([{ from: 'src/manifest.json', to: '../public' }])
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  bail: false,
  performance: {
    hints: false
  }
};
