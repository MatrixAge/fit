declare module '*.png'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.styl'

// @ts-ignore
declare const process: {
	env: {
		TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
		[key: string]: any
	}
}

declare namespace Taro {
	function $memo<T>(
		el: (props: T) => JSX.Element | null
	): React.MemoExoticComponent<(props: T) => JSX.Element | null>

	let $store: any
}

interface Object {
	toPrice: (fixed?: number) => string
}

declare namespace WechatMiniprogram {
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
		usingComponents?: {
			[key: string]: string
		}
	}

	type Callback = (res: {
		openType: 'navigateTo' | 'switchTab' | 'reLaunch' | 'redirectTo' | 'navigateBack'
		page: { window: ICommonConfig }
		path: string
		query: any
		webviewId: number
	}) => void

	interface Wx {
		onAppRoute: (callback: Callback) => void
	}
}
