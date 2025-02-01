"use client"
import { useState } from "react"
import { Loading } from "../graphics/graphics"

const Iframe = (props) => {
	const [isLoading, setIsLoading] = useState(true)
	const handleLoad = () => {
		setIsLoading(false)
	}
	return (
		<>
			{isLoading && (
				<div className="t-0 l-0 absolute h-dvh w-dvw flex items-center justify-center">
					<Loading className="w-80" />
				</div>
			)}
			<iframe {...props} onLoad={handleLoad}></iframe>
		</>
	)
}

export default Iframe
