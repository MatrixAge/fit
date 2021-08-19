export interface IAppModel {
	visible_menu: boolean
}

export default {
	namespace: 'app',

	state: {
		visible_menu: false
	} as IAppModel,

	effects: {}
}
