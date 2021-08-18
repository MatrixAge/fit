import type { ITimer } from '@/dto/Timer'

export interface IModel extends ITimer {
	type: 'add' | 'update'
	preset_name: string
	dialog: {
		visible: boolean
		title: string
		key: string
	}
	picker: {
		visible: boolean
		title: string
		key: string
	}
}

const state = {
	type: 'add',

	id: 0,
	name: '',
	ready: 0,
	fit: 0,
	relax: 0,
	times: 0,
	repeat_relax: 0,
	color: '',
	energy: 0,

	preset_id: 0,
	preset_name: '',

	dialog: {
		visible: false,
		title: '',
		key: ''
	},
	picker: {
		visible: false,
		title: '',
		key: ''
	}
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
