import type { IModel } from './model'

export { IModel }

export interface IProps {
	page_data: IModel
}

export interface IPageData {
	timer: IModel
}

export interface IPropsSwiper {
	current: IModel['current']
	setCurrent: (current: IModel['current']) => void
}

export interface IPropsTimerList {}
