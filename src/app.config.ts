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
		backgroundTextStyle: 'light',
		navigationBarBackgroundColor: '#222',
		navigationBarTitleText: 'WeChat',
		navigationBarTextStyle: 'white'
	},
	tabBar: {
		backgroundColor: '#222',
		color: '#fff',
		list: [
			{
				pagePath: 'pages/timer/index/index',
				iconPath: 'assets/images/nav_timer.png',
				selectedIconPath: 'assets/images/nav_timer_active.png'
			},
			{
				pagePath: 'pages/list/index/index',
				iconPath: 'assets/images/nav_list.png',
				selectedIconPath: 'assets/images/nav_list_active.png'
			},
			{
				pagePath: 'pages/plan/index/index',
				iconPath: 'assets/images/nav_plan.png',
				selectedIconPath: 'assets/images/nav_plan_active.png'
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
