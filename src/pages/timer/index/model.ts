export interface IModel {
	current: number
}

export default {
	namespace: 'timer',

	state: {
		current: 0
	} as IModel,

	subscriptions: {
		setup() {}
	},

	effects: {}
}
