import HeaderPage from "@/components/HeaderPage"
import FooterPage from "@/components/FooterPage"
import ChopperSad from "@/assets/choppersad.png"
import Image from "next/image"
import Link from "next/link"

const NotFoundPage = () => {
	return (
		<>
			<HeaderPage />
			<div className="relative bg-color-hitam px-5 py-5 pt-12 md:px-12">
				<div className="flex flex-col items-center justify-center gap-2">
					<h1 className="text-4xl">You&apos;re lost Marimo!</h1>
					<Image src={ChopperSad} alt="Error" priority />
					<h2>Let me guide you back to our crew.</h2>
					<Link href={"/"} aria-label="DMCA">
						<p>Through this way!</p>
					</Link>
				</div>
			</div>
			<FooterPage />
		</>
	)
}

export default NotFoundPage
