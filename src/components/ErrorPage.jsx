import ChopperSad from "@/assets/choppersad.png"
import Image from "next/image"

const ErrorPage = ({ message }) => {
	return (
		<>
			<div className="flex flex-col items-center justify-center gap-2">
				<Image src={ChopperSad} alt="Error" priority />
				<h2>{message}</h2>
			</div>
		</>
	)
}

export default ErrorPage
