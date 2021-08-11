declare module 'dva-core'
declare module 'dva-immer'
declare module 'dva-loading'
declare module 'dva-model-extend' {
	import type { Model } from '@/typings/dva'

	const modelExtend: (common_model: Model, target_model: Model) => Model

	export default modelExtend
}
