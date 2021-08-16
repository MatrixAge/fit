import Taro from '@tarojs/taro'
import { CustomWrapper, View, Text, Input, Switch } from '@tarojs/components'

const Index = () => {
	return (
		<CustomWrapper>
			<View className='form_section w_100 border_box'>
				<View className='form_item w_100 border_box flex justify_between align_center bg_white'>
					<Input
						className='input timer_name border_box'
						placeholder='请输入训练名称'
						placeholderClass='color_aaa'
					></Input>
					<Text className='btn_choose_preset text_right bg_color_222 white'>
						选择预设
					</Text>
				</View>
				<View className='form_item w_100 border_box flex justify_between align_center bg_white'>
					<Text className='name'>保存为预设</Text>
					<Switch className='switch' color='#222'></Switch>
				</View>
				<View className='form_item no_border w_100 border_box flex justify_between align_center bg_white'>
					<Text className='name'>预设名称</Text>
					<Input
						className='input border_box text_right'
						placeholder='请输入预设名称'
						placeholderClass='color_aaa'
					></Input>
				</View>
			</View>
		</CustomWrapper>
	)
}

export default Taro.$memo(Index)
