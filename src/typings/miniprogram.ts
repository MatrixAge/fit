export interface ICommonConfig {
	navigationBarBackgroundColor?: string
	navigationBarTextStyle?: string
	navigationBarTitleText?: string
	navigationStyle?: string
	backgroundColor?: string
	backgroundTextStyle?: string
	backgroundColorTop?: string
	backgroundColorBottom?: string
	enablePullDownRefresh?: boolean
	onReachBottomDistance?: number
	pageOrientation?: string
}

interface ITabBar {
	color: string
	selectedColor: string
	backgroundColor: string
	borderStyle?: string
	list: Array<{
		pagePath: string
		text: string
		iconPath?: string
		selectedIconPath?: string
	}>
	position?: 'bottom' | 'top'
	custom?: boolean
}

export interface IAppConfig {
	entryPagePath?: string
	pages?: Array<string>
	window?: ICommonConfig
	tabBar?: ITabBar
	networkTimeout?: {
		request?: number
		connectSocket?: number
		uploadFile?: number
		downloadFile?: number
	}
	debug?: boolean
	functionalPages?: boolean
	subPackages?: Array<{
		root: string
		name?: string
		pages: Array<string>
		independent?: boolean
	}>
	workers?: string
	requiredBackgroundModes?: Array<string>
	plugins?: any
	preloadRule?: any
	resizable?: boolean
	usingComponents?: any
	permission?: any
	sitemapLocation?: string
	style?: string
	useExtendedLib?: any
	entranceDeclare?: any
	darkmode?: boolean
	themeLocation?: string
	lazyCodeLoading?: string
	singlePage?: {
		navigationBarFit?: string
	}
}

export interface IPageConfig extends ICommonConfig {
	disableScroll?: boolean
	usingComponents?: any
	initialRenderingCache?: string
	style?: string
	singlePage?: {
		navigationBarFit?: string
	}
}
