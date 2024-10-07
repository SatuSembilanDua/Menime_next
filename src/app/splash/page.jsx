// "use client"
import SafeAreaView from "@/components/SafeAreaView"
import View from "@/components/View"
import Text from "@/components/Text"
import SplashLoading from "@/components/SplashLoading"
import { initMenime } from "@/libs/splashUtils"
// import { useEffect } from "react"

export const Splash = async () => {
	const data = await initMenime()
	// useEffect(() => {
	// 	const init = async () => {
	// 		const data = await initMenime()
	// 	}
	// 	init().catch(console.error)
	// }, [])
	return (
		<>
			<SafeAreaView>
				<View className="flex h-full w-full flex-col items-center justify-between px-8 py-20">
					<SplashLoading />
					<Text>Menime</Text>
				</View>
			</SafeAreaView>
		</>
	)
}

export default Splash
