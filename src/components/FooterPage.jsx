import Link from "next/link"
import Image from "next/image"

const FooterPage = () => {
	return (
		<>
			<div className="footerComp border-t-4 border-solid border-color-menime px-[15px]">
				<div className="grid grid-cols-1 md:grid-cols-2">
					<div className="py-8">
						<Link href={"/"} aria-label="home">
							<Image
								src={"/imgs/icons.webp"}
								alt="Menime Logo"
								width={155}
								height={45}
								className="my-[5px] h-[45px]"
								priority
							/>
						</Link>
						<p className="mb-1 border-t-2 border-solid border-white py-2">
							Copyright &copy; 2024 Menime. All Rights Reserved
							<br />
						</p>
						<p className="leading-1 text-xs">
							Disclaimer: This site Menime does not store any files on its
							server. All contents are provided by non-affiliated third parties.
						</p>
					</div>
					<div className="px-[20px] py-[50px] text-right text-color-abu">
						<Link href={"/about/dmca"} aria-label="DMCA">
							DMCA
						</Link>
						&nbsp;|&nbsp;
						<Link href={"/about/privacy"} aria-label="Privacy">
							Privacy
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default FooterPage
