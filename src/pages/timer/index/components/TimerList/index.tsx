import { useCallback } from 'react'
import Taro from '@tarojs/taro'
import { CustomWrapper, View, Button, Text } from '@tarojs/components'
import { Router } from 'tarojs-router-next'
import { Icon } from '@/components'
import { add } from '@/components/Icon/icons'
import styles from './index.less'
import type { IPropsTimerList } from '../../index.d'

const Index = (props: IPropsTimerList) => {
	const onAdd = useCallback(() => {
		Router.navigate({ url: '/pages/timer/edit/index' }, { params: { type: 'add' } })
	}, [])

	return (
		<CustomWrapper>
			<View className={styles._local} catchMove>
				<Button
					className='btn_add w_100 border_box flex justify_start relative shadow_main'
					hoverClass='none'
					onClick={onAdd}
				>
					<Text className='mark absolute'>Fit</Text>
					<Icon icon={add} size={40} color='white'></Icon>
					<View className='right flex flex_column align_start'>
						<Text className='text'>添加计时器</Text>
						<Text className='desc color_eee'>
							添加一个锻炼计时器，开始健身吧
						</Text>
					</View>
				</Button>
			</View>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
