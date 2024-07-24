import Link from "next/link"

const Breadcrumb = ({ dataNav }) => {
	return (
		<>
			<ol className="breadcrumb md:text-md flex border-b-4 border-color-menime bg-[#0a0909] py-[8px] pl-[8px] text-sm md:pl-[100px]">
				<li>
					<Link href={"/"}>Home</Link>
				</li>
				<NavBread crnav={dataNav} />
			</ol>
		</>
	)
}

const NavBread = ({ crnav }) => {
	if (!crnav) return ""
	return (
		<>
			{crnav.map((e, i) => {
				if (e.type == "current") {
					return <li key={i}>{e.name}</li>
				} else {
					return (
						<li key={i}>
							<Link href={`/anime/${e.type}`}>{e.name}</Link>
						</li>
					)
				}
			})}
		</>
	)
}

export default Breadcrumb
