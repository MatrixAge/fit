import { useCallback } from 'react'
import Taro from '@tarojs/taro'

const Index = (filePaths: Array<string>, is_video?: boolean) => {
	const saveImages = useCallback(
		(imageArray) => {
			const saveImageArray = imageArray.map((filePath: string) => {
				if (is_video) {
					Taro.saveVideoToPhotosAlbum({
						filePath: filePath
					})
				} else {
					Taro.saveImageToPhotosAlbum({
						filePath: filePath
					})
				}
			})

			Promise.all(saveImageArray)
				.then(() => {
					Taro.showToast({ title: '保存成功！', icon: 'success' })
				})
				.catch(() => {})
		},
		[is_video]
	)

	const downloadImages = useCallback(() => {
		const downloadImageArray = filePaths.map(
			(filePath) =>
				new Promise((resolve, reject) => {
					if (is_video) {
						Taro.downloadFile({
							url: filePath,
							success: (res) => {
								resolve(res.tempFilePath)
							},
							fail: () => {
								reject('failed')
							}
						})
					} else {
						Taro.getImageInfo({
							src: filePath,
							success: (res) => {
								resolve(res.path)
							},
							fail: () => {
								reject('failed')
							}
						})
					}
				})
		)

		Promise.all(downloadImageArray)
			.then((res) => {
				Taro.hideLoading()

				saveImages(res)
			})
			.catch(() => {
				Taro.hideLoading()
			})
	}, [filePaths, is_video, saveImages])

	const saveImageToPhotosAlbum = useCallback(() => {
		if (!filePaths.length) return

		Taro.showLoading({ title: '下载中' })

		downloadImages()
	}, [downloadImages, filePaths])

	return saveImageToPhotosAlbum
}

export default Index
