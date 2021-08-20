export interface IAppModel {
	current_tab: number
	visible_menu: boolean
}

export default {
	namespace: 'app',

	state: {
		current_tab: 0,
		visible_menu: false
	} as IAppModel,

	effects: {}
}
