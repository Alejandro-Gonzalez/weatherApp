const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		modules: [
			'styled-components',
			'react',
			'react-dom',
			'prop-types'
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		library: '[name]',
		filename: 'modules.js'
	},
	plugins: [
		new webpack.DllPlugin({
			name: '[name]',
			path: path.join(__dirname, '[name]-manifest.json')
		})
	]
};
