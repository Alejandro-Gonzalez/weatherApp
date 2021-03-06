const HtmlWebpackPlugin = require('html-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const webpack = require('webpack');
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
	plugins: [
		new webpack.DefinePlugin({
			'process.env.WEATHER_API': JSON.stringify(process.env.WEATHER_API),
			'process.env.WEATHER_KEY': JSON.stringify(process.env.WEATHER_KEY)
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new MomentLocalesPlugin({
			localesToKeep: ['es']
		}),
		new webpack.DllReferencePlugin({
			manifest: require('./modules-manifest.json')
		})
	]
};
