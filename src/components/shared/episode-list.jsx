import Link from "next/link"
import { MonitorPlay } from "../graphics/graphics"

const EpisodeList = ({ item }) => {
	return (
		<>
			<Link href={`/episode/${item.link}`}>
				<div className="flex gap-2 border-b-2 border-solid border-white/40 py-1 text-white hover:bg-primary">
					<div className="flex-none basis-12">
						<MonitorPlay width="40" height="40" className="w-full" />
					</div>
					<div className="grow">
						<div className="flex justify-between pt-1 text-xs">
							<p>{item.eps}</p>
							<span className="pr-2 text-white/50">{item.date}</span>
						</div>
						<h3 className="md:text-md text-sm">{item.judul}</h3>
					</div>
				</div>
			</Link>
		</>
	)
}

export default EpisodeList
