import { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import { Dialog, Counter } from '@/components'
import type { IPropsDialog } from '../../index.d'

const Index = ({ dialog, setDialog, setValue }: IPropsDialog) => {
	const [input, setInput] = useState<string | number>('')

	return (
		<Dialog
			title={dialog.title}
			visible={dialog.visible}
			onClose={() => setDialog({ visible: false })}
			onOk={() => {
				setValue(dialog.key, input)
				setDialog({ visible: false })
			}}
		>
			{dialog.key === 'name' && (
				<View className='local_dialog_wrap w_100 flex justify_center'>
					<Input
						className='dialog_input text_center'
						placeholder={`请输入${dialog.title}`}
						placeholderClass='color_aaa'
						maxlength={24}
						onInput={({ detail: { value } }) => setInput(value)}
					></Input>
				</View>
			)}
			{dialog.key === 'times' && (
				<View className='local_dialog_wrap counter_wrap w_100 flex justify_center'>
					<Counter min={1} onChange={(v) => setInput(v)}></Counter>
				</View>
			)}
		</Dialog>
	)
}

export default Taro.$memo(Index)
