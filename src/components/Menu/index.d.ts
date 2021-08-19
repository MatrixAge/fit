import type { IAppModel } from '@/models/app'

export { IAppModel }

export interface IProps {
	visible: IAppModel['visible_menu']
}

export interface IPageData {
	app: IAppModel
}
