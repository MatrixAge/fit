import { ITouchEvent } from '@tarojs/components'

export const onTouchMove = (e: ITouchEvent) => {
	e.preventDefault()
	e.stopPropagation()
}
