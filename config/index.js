const path = require('path')

const config = {
	projectName: 'miniprogram_svip',
	date: '2021-7-6',
	designWidth: 750,
	deviceRatio: {
		640: 2.34 / 2,
		750: 1,
		828: 1.81 / 2
	},
	sourceRoot: 'src',
	outputRoot: 'dist',
	plugins: [['tarojs-router-next-plugin', { watch: false }]],
	defineConstants: {},
	framework: 'react',
	alias: { '@': path.resolve(__dirname, '..', 'src') },
	terser: { enable: true },
	csso: { enable: true },
	copy: {
		patterns: [
			{
				from: 'src/assets/sitemap.json',
				to: 'dist/'
			}
		],
		options: {}
	},
	mini: {
		postcss: {
			pxtransform: {
				enable: true,
				config: {}
			},
			url: {
				enable: true,
				config: {
					limit: 20480
				}
			},
			cssModules: {
				enable: true,
				config: {
					namingPattern: 'global',
					generateScopedName: '[name]_[hash:base64:3]'
				}
			}
		}
	},
	h5: {
		publicPath: '/',
		staticDirectory: 'static',
		postcss: {
			autoprefixer: {
				enable: true,
				config: {}
			},
			cssModules: {
				enable: true,
				config: {
					namingPattern: 'global',
					generateScopedName: '[name]_[hash:base64:3]'
				}
			}
		}
	}
}

module.exports = function (merge) {
	if (process.env.NODE_ENV === 'development') {
		return merge({}, config, require('./dev'))
	}

	return merge({}, config, require('./prod'))
}
