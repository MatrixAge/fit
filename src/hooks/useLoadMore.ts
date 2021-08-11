import { useState, useEffect, useCallback } from 'react'
import Taro, { useReachBottom } from '@tarojs/taro'

type Hook = <RequestType, ResponseType>(
	url: string,
	data?: RequestType,
	autoRun?: boolean
) => {
	list: Array<ResponseType>
	loading: boolean
	end: boolean
	page: number
	reset: (no_request?: boolean) => void
	getList: (cover?: boolean) => void
}

const Index: Hook = (url = '', data, autoRun = true) => {
	const [list, setList] = useState<any>([])
	const [page, setPage] = useState(1)
	const [loading, setLoading] = useState(false)
	const [end, setEnd] = useState(false)
	const [pull, setPull] = useState(false)

	const getList = useCallback(
		(cover?: boolean) => {
			setLoading(true)

			Taro.request({
				url: url,
				method: 'POST',
				data: {
					...data,
					page
				}
			}).then((res) => {
				setLoading(false)
				setPull(false)

				if (cover) {
					setList(res.data.list)
				} else {
					setList([...list, ...res.data.list])
				}

				if (!res.data.list.length && page > 1) setEnd(true)
			})
		},
		[page, data]
	)

	useEffect(() => {
		if (!page) return
		if (page === 1 && !autoRun) return

		getList()
	}, [page])

	useEffect(() => {
		if (!pull) Taro.stopPullDownRefresh()
	}, [pull])

	useReachBottom(() => {
		if (loading) return
		if (end) return

		setPage(page + 1)
	})

	const reset = useCallback(
		(no_request?: boolean) => {
			setPull(true)
			setList([])
			setLoading(false)
			setEnd(false)

			if (page === 1) {
				if (!no_request) getList()
			} else {
				setPage(1)
			}
		},
		[page]
	)

	return { list, loading, end, page, getList, reset }
}

export default Index
