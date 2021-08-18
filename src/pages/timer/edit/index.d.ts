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

export interface IPropsTime {
	ready: IModel['ready']
	fit: IModel['fit']
	relax: IModel['relax']
	setPicker: (values: Partial<IModel['picker']>) => void
}

export interface IPropsOptions {
	times: IModel['times']
	repeat_relax: IModel['repeat_relax']
	setDialog: (values: Partial<IModel['dialog']>) => void
	setPicker: (values: Partial<IModel['picker']>) => void
}

export interface IPropsDialog {
	dialog: IModel['dialog']
	setDialog: (values: Partial<IModel['dialog']>) => void
	setValue: (key: string, v: string | number) => void
}

export interface IPropsPicker {
	picker: IModel['picker']
	setPicker: (values: Partial<IModel['picker']>) => void
	setValue: (key: string, v: string | number) => void
}
