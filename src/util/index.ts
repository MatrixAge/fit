import Taro from '@tarojs/taro'

export const nextTick = () =>
	new Promise((resolve) => {
		Taro.nextTick(() => {
			resolve(1)
		})
	})

export const formatSeconds = (
	v: number,
	options?: { showZero?: boolean; NoColon?: boolean; noHour?: boolean }
) => {
	const unit_h = options?.NoColon ? '小时' : ':'
	const unit_m = options?.NoColon ? '分' : ':'
	const unit_s = options?.NoColon ? '秒' : ''

	const h = Math.floor(v / 3600) < 10 ? '0' + Math.floor(v / 3600) : Math.floor(v / 3600)
	const m =
		Math.floor((v / 60) % 60) < 10
			? '0' + Math.floor((v / 60) % 60)
			: Math.floor((v / 60) % 60)
	const s = Math.floor(v % 60) < 10 ? '0' + Math.floor(v % 60) : Math.floor(v % 60)

	let res = ''

	if (!options?.showZero) {
		if (!options?.noHour) if (h !== '00') res += `${h}${unit_h}`

		if (m !== '00') res += `${m}${unit_m}`
	} else {
		if (!options?.noHour) res += `${h}${unit_h}`

		res += `${m}${unit_m}`
	}

	res += `${s}${unit_s}`

	return res
}

export const formatTime = (v: string, options?: { hasHour?: boolean }) => {
	const arr = v.split(':')

	if (options?.hasHour) {
		return 3600 * Number(arr[0]) + 60 * Number(arr[1]) + Number(arr[2])
	}

	return 60 * Number(arr[0]) + Number(arr[1])
}
