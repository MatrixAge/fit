import { useCallback } from 'react'
import Taro from '@tarojs/taro'
import { CustomWrapper, View, Text } from '@tarojs/components'
import { Router } from 'tarojs-router-next'
import { Icon, Line } from '@/components'
import { add, gift, create } from '@/components/Icon/icons'
import styles from './index.less'
import type { IPropsTimerList } from '../../index.d'

const Index = (props: IPropsTimerList) => {
	const onAdd = useCallback(() => {
		Router.navigate({ url: '/pages/timer/edit/index' }, { params: { type: 'add' } })
	}, [])

	return (
		<CustomWrapper>
			<View className={styles._local} catchMove>
				<View className='options_wrap fixed'>
					<Line box thin clickable color='#eee' radius={40} onClick={onAdd}>
						<View
							className='btn border_box flex justify_center align_center'
							hoverClass='none'
						>
							<Icon icon={add} size={20}></Icon>
						</View>
					</Line>
				</View>
			</View>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
