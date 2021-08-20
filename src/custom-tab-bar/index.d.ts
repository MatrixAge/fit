import type { IAppModel } from '@/models/app'

export { IAppModel }

export interface IProps {
	current: IAppModel['current_tab']
	visible: IAppModel['visible_menu']
}

export interface IPageData {
	app: IAppModel
}
