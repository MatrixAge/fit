// 公共model 会注入到所有model当中

const pageModal = {
	reducers: {
		updateState(state: any, { payload }) {
			return {
				...state,
				...payload
			}
		}
	}
}

// 基于 webpack require.context 实现自动注册model

const models_target: Array<any> = []
const models_source = {
	files_model_app: require.context('../models', false, /\.ts$/),
	files_model_pages: require.context('../pages', true, /model\.ts$/),
	files_model_packages: require.context('../packages', true, /model\.ts$/)
}

for (const i in models_source) {
	models_source[i].keys().map((item: any) => {
		const model = models_source[i](item).default

		if (!model) return

		if (model.hasOwnProperty('reducers')) {
			model.reducers = Object.assign(model.reducers, pageModal.reducers)
		} else {
			model.reducers = pageModal.reducers
		}

		models_target.push(model)
	})
}

export default models_target.filter((item) => item)
