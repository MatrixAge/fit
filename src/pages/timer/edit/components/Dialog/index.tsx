import { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import { Dialog } from '@/components'
import type { IPropsDialog } from '../../index.d'

const Index = ({ dialog, closeDialog, setValue }: IPropsDialog) => {
	const [input, setInput] = useState('')

	return (
		<Dialog
			title={dialog.title}
			visible={dialog.visible}
			okVisible
			onClose={closeDialog}
			onOk={() => {
				setValue(dialog.key, input)
				closeDialog()
			}}
		>
			<View className='w_100 flex justify_center'>
				{dialog.key === 'name' && (
					<Input
						className='dialog_input text_center'
						placeholder={`请输入${dialog.title}`}
						placeholderClass='color_aaa'
						maxlength={24}
						onInput={({ detail: { value } }) => setInput(value)}
					></Input>
				)}
			</View>
		</Dialog>
	)
}

export default Taro.$memo(Index)
