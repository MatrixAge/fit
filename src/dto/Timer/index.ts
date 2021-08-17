import Taro from '@tarojs/taro'
import { remove } from 'lodash-es'

export class ITimer {
	id: number
	name: string
	ready: number
	fit: number
	relax: number
	times: number
	repeat_relax: number
	color: string
	energy?: number

	preset_id?: number
}

export default class Timer extends ITimer {
	private get getTimerList(): Array<ITimer> {
		return Taro.getStorageSync('timer_list') || []
	}

	private setTimerList(items: Array<ITimer>) {
		Taro.setStorageSync('timer_list', items)
	}

	public get getOnceTime() {
		return this.ready + this.fit + this.relax
	}

	public get getTotalTime() {
		return (this.getOnceTime + this.repeat_relax) * this.times
	}

	public add(item: Omit<ITimer, 'id'>) {
		const timer_list = this.getTimerList

		timer_list.push({
			id: Number(new Date().valueOf()),
			...item
		})

		this.setTimerList(timer_list)
	}

	public delete(id: number) {
		const timer_list = this.getTimerList
	}

	public update() {}

	public query() {}

	public sync() {}
}
