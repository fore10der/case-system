import base from './webpack.config.base';

export default ({ route = '', port = 8090 }) => ({
	...base,
	mode: 'development',
	devServer: {
		historyApiFallback: true,
		hot: true,
		port,
	},
});
