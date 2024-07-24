import Link from "next/link"
import Image from "next/image"

const HeaderPage = () => {
	return (
		<div className="HeaderLogo border-b-4 border-color-menime p-0 text-center md:px-[100px] md:text-left">
			<a href={"/"}>
				<Image
					src={"/imgs/icons.webp"}
					alt="Menime Logo"
					width={250}
					height={75}
					className="mx-auto my-[20px] h-[75px] md:mx-0"
					priority
				/>
			</a>
		</div>
	)
}

export default HeaderPage
