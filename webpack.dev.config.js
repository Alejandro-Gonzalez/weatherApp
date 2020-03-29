const HtmlWebpackPlugin = require('html-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules']
	},
	entry: {
		app: path.resolve(__dirname, 'src/index')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['inline-react-svg', '@babel/plugin-transform-runtime']
					}
				}
			},
			{
				test: /\.svg$/,
				loader: 'svg-react-loader'
			}
		]
	},
	node: {
		fs: 'empty'
	},
	plugins: [
		new Dotenv({ path: '.env', safe: true }),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new MomentLocalesPlugin({
			localesToKeep: ['es']
		})
	]
};
