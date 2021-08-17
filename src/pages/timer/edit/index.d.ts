import type { IModel } from './model'

export { IModel }

export interface IProps {
	page_data: IModel
}

export interface IPageData {
	timer_edit: IModel
}

export interface IPropsName {
	name: IModel['name']
	preset_name: IModel['preset_name']
	setDialog: (values: Partial<IModel['dialog']>) => void
}

export interface IPropsDialog {
	dialog: IModel['dialog']
	closeDialog: () => void
	setValue: (key: string, v: string | number) => void
}
