import { useState, useCallback } from 'react'
import { ITouchEvent } from '@tarojs/components'

const useDoubleClick = () => {
	const [state_last_timestamp, setStateLastTimestamp] = useState<number | undefined>(undefined)

	return useCallback(
		(e: ITouchEvent, callback: () => void) => {
			setStateLastTimestamp(e.timeStamp)

			if (!state_last_timestamp) return
			if (e.timeStamp - state_last_timestamp > 300) return

			callback()
		},
		[state_last_timestamp, setStateLastTimestamp]
	)
}

export default useDoubleClick
