import type { IAppConfig } from '@/typings/miniprogram'

export default {
	pages: [
		'pages/timer/index/index',
		'pages/list/index/index',
		'pages/plan/index/index',
		'pages/exa/index/index',
		'pages/more/index/index'
	],
	window: {
		backgroundTextStyle: 'dark',
		navigationBarBackgroundColor: '#fff',
		navigationBarTextStyle: 'black'
	},
	tabBar: {
		backgroundColor: 'white',
		borderStyle: 'white',
		list: [
			{
				pagePath: 'pages/timer/index/index',
				iconPath: 'assets/images/nav_timer.png',
				selectedIconPath: 'assets/images/nav_timer_active.png'
			},
			{
				pagePath: 'pages/exa/index/index',
				iconPath: 'assets/images/nav_exa.png',
				selectedIconPath: 'assets/images/nav_exa_active.png'
			},
			{
				pagePath: 'pages/more/index/index',
				iconPath: 'assets/images/nav_more.png',
				selectedIconPath: 'assets/images/nav_more_active.png'
			}
		]
	},
	sitemapLocation: 'sitemap.json'
} as IAppConfig
