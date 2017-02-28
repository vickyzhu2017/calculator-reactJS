var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserPlugin = require('open-browser-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	entry: path.resolve(__dirname, './src/app.js'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js?v=[hash:6]'
	},
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		port: 8080,
		inline: true,//自动刷新
		stats: {
			colors: true
		}
	},
	"devtool": "cheap-module-eval-source-map",
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: path.resolve(__dirname, './src')
			},
			{
				test: /\.css$/,
				loader: extractTextPlugin.extract('style-loader!css-loader'),
				include: path.resolve(__dirname, './src')

			},
			{
                test:/\.(eot|svg|ttf|woff|woff2)/,
                loader:'url-loader'
            }
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './src/index.html'
		}),
		// 自动打开浏览器
		new openBrowserPlugin({url: 'http://localhost:8080'}),
		// 提取文本插件
		new extractTextPlugin("style.css")

	]
}