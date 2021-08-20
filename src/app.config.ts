import type { IAppConfig } from '@/typings/miniprogram'

export default {
	pages: [
		'pages/timer/index/index',
		'pages/timer/edit/index',
		'pages/exa/index/index',
		'pages/more/index/index'
	],
	window: {
		backgroundTextStyle: 'dark',
		navigationBarBackgroundColor: '#fff',
		navigationBarTextStyle: 'black',
		navigationStyle: 'custom'
	},
	tabBar: {
		custom: true,
		list: [
			{
				pagePath: 'pages/timer/index/index'
			},
			{
				pagePath: 'pages/exa/index/index'
			},
			{
				pagePath: 'pages/more/index/index'
			}
		]
	},
	sitemapLocation: 'sitemap.json'
} as IAppConfig
