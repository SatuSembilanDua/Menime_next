"use client"
import Lottie from "lottie-react"
import MenimeAnim from "@/assets/menime.json"
import View from "@/components/View"

const SplashLoading = () => {
	return (
		<View className="w-full items-center justify-center px-16 pt-40 md:w-2/3 md:px-96 md:pt-40">
			<Lottie animationData={MenimeAnim} loop={true} />
		</View>
	)
}

export default SplashLoading
