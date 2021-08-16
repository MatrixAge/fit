export interface IModel {
	type: 'add' | 'update'
	id: number
}

const state = {
	type: 'add',
	id: 0
}

export default {
	namespace: 'timer_edit',

	state: state as IModel,

	subscriptions: {
		setup({ dispatch }) {
			wx.onAppRoute(({ path, query: { type, id } }) => {
				if (path !== 'pages/timer/detail/index') return

				dispatch({
					type: 'updateState',
					payload: { type, id } as IModel
				})
			})
		}
	},

	effects: {}
}
