import type { Reducer, ReducersMapObject, Dispatch, AnyAction } from 'redux'

interface ReducerEnhancer {
	(reducer: Reducer<any>): void
}

interface EffectsCommandMap {
	put: <A extends AnyAction>(action: A) => any
	call: Function
	select: Function
	take: Function
	cancel: Function

	[key: string]: any
}

type Effect = (action: AnyAction, effects: EffectsCommandMap) => void
type EffectType = 'takeEvery' | 'takeLatest' | 'watcher' | 'throttle'
type EffectWithType = [Effect, { type: EffectType }]
type Subscription = (api: SubscriptionAPI, done: Function) => void
type ReducersMapObjectWithEnhancer = [ReducersMapObject, ReducerEnhancer]

interface SubscriptionAPI {
	dispatch: Dispatch<any>
}

interface SubscriptionsMapObject {
	[key: string]: Subscription
}

interface EffectsMapObject {
	[key: string]: Effect | EffectWithType
}

interface ReduxV3ReducersMapObject {
	[key: string]: Reducer<any>
}

export interface Model {
	namespace: string
	state?: any
	reducers?: ReduxV3ReducersMapObject | ReducersMapObjectWithEnhancer
	effects?: EffectsMapObject
	subscriptions?: SubscriptionsMapObject
}

export interface ConnectProps<P extends { [K in keyof P]?: string } = {}> {
	dispatch?: Dispatch
}

export type RequiredConnectProps<P extends { [K in keyof P]?: string } = {}> = Required<
	ConnectProps<P>
>

/**
 * @type T: React props
 * @type U: match props types
 */
export type ConnectRC<T = {}, U = {}> = React.ForwardRefRenderFunction<
	any,
	T & RequiredConnectProps<U>
>

export interface Loading {
	global: boolean
	effects: { [key: string]: boolean | undefined }
	models: {
		[key: string]: any
	}
}
