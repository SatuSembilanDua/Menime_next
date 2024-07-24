import LoadingImage from "@/assets/loading.svg"
import Image from "next/image"

const Loading = () => {
	return (
		<>
			<div className="flex justify-center">
				<Image src={LoadingImage} alt="Loading..." priority />
			</div>
		</>
	)
}

export default Loading
