import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export default {
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
				},
				exclude: /node_modules/,
			},
			{
				test: /\.(ttf|svg)($|\?)/,
				loader: 'file-loader',
				options: {
					useRelativePath: false,
				},
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin({
			async: false,
		}),
	],
};
