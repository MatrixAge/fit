import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { CustomWrapper, View, Button, Text, Input } from '@tarojs/components'
import styles from './index.less'

interface IProps {
	id?: number
	initialValue?: number
	min?: number
	max?: number
	step?: number
	onChange: (v: number, id?: number) => void
}

const Index = (props: IProps) => {
	const { id, initialValue = 1, min = 0, max = Infinity, step = 1, onChange } = props
	const [value, setValue] = useState(initialValue)

	useEffect(() => {
		onChange(value, id)
	}, [value, id])

	const decrease = () => {
		if (value > min) {
			setValue(value - step)
		}
	}

	const increase = () => {
		if (value < max) {
			setValue(value + step)
		}
	}

	return (
		<CustomWrapper>
			<View className={styles._local}>
				<Button className='btn_decrease btn' onClick={decrease}>
					<Text className='line'></Text>
				</Button>
				<Input className='input' type='number' value={String(value)}></Input>
				<Button className='btn_increase btn relative' onClick={increase}>
					<Text className='line absolute'></Text>
					<Text className='line'></Text>
				</Button>
			</View>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
