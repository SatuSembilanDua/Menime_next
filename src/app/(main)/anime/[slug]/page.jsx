"use client"
import MonitorPlay from "@/assets/MonitorPlay"
import SortAscending from "@/assets/SortAscending"
import SortDescending from "@/assets/SortDescending"
import ErrorPage from "@/components/ErrorPage"
import Loading from "@/components/Loading"
import useAnime from "@/hooks/useAnime"
import useEpisodes from "@/hooks/useEpisodes"
import Link from "next/link"
import { useEffect, useState } from "react"

const AnimePage = ({ params }) => {
	const [episodes, setEpisodes] = useState([])
	const [hasNext, setHasNext] = useState(false)
	const [isLoading, setIsLoading] = useState(0)
	// const [searchQuery, setSearchQuery] = useState("")
	const { data: anime, isLoading: isLoadingAnim } = useAnime(params.slug)
	const {
		data: fetchEpisodes,
		isValidating,
		sort,
		setSort,
		search,
		setSearch,
		setPage,
	} = useEpisodes(params.slug)

	useEffect(() => {
		if (anime != undefined || anime != {}) {
			document.title = `${anime?.judul_anime} | Menime `
		}
	}, [anime])

	useEffect(() => {
		if (fetchEpisodes) {
			setEpisodes((old) => [...old, ...fetchEpisodes.data])
			setHasNext(fetchEpisodes.has_next)
			setIsLoading(1)
		}
	}, [fetchEpisodes, isValidating])

	useEffect(() => {
		setEpisodes([])
		setPage(1)
		setIsLoading(0)
	}, [sort, setPage])

	const hadleScroll = (event) => {
		const { scrollTop, clientHeight, scrollHeight } = event.target
		if (scrollTop + clientHeight >= scrollHeight - 20) {
			if (hasNext && isLoading == 1) {
				console.log("Load More")
				setPage((old) => old + 1)
				setIsLoading(2)
			}
		}
	}

	const handleSeacrh = (e) => {
		setSearch(e.target.value.trim())
		setEpisodes([])
		setPage(1)
		setIsLoading(0)
	}

	if (isLoadingAnim) {
		return <Loading />
	}

	return (
		<>
			<h2 className="page-title">{`LIST EPISODE ${anime?.judul_anime.toUpperCase()}`}</h2>
			<div className="my-2 grid grid-cols-2 gap-2 border-b-2 border-solid border-white/70 py-2 text-black">
				<div>
					<button
						onClick={() => setSort((old) => !old)}
						className="flex items-center justify-center rounded-sm bg-white px-8 py-1 active:bg-white/35"
					>
						Sort&nbsp;
						{sort ? (
							<SortDescending width={16} height={16} />
						) : (
							<SortAscending width={16} height={16} />
						)}
					</button>
				</div>
				<div>
					<input
						type="search"
						id="search-navbar"
						className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-5 text-sm focus:border-blue-500 focus:ring-blue-500"
						placeholder="Search..."
						value={search}
						onChange={handleSeacrh}
					/>
				</div>
			</div>
			<div
				className="scroll-box mb-5 h-96 overflow-y-auto pr-2"
				onScroll={hadleScroll}
			>
				<ItemList
					episodes={episodes}
					isLoading={isLoading}
					slug={params.slug}
				/>
			</div>
		</>
	)
}

const ItemList = ({ episodes, isLoading, slug }) => {
	if (isLoading == 0) {
		return <LoadingList />
	}
	if (isLoading == 1 && episodes.length == 0) {
		return <ErrorPage message={"Episode Tidak ditemukan!"} />
	}
	return (
		<>
			<EpisodeList episodes={episodes} slug={slug} />
			{isLoading == 2 ? <Loading /> : ""}
		</>
	)
}

const LoadingList = () => {
	const dummy = Array.from(Array(7).keys())
	return (
		<>
			{dummy.map((item) => (
				<div key={item} className="border-solid border-white/40">
					<div className="flex animate-pulse gap-2 border-b-2 py-1">
						<div className="flex-none basis-12">
							<div className="col-span-2 h-10 w-10 rounded bg-slate-200"></div>
						</div>
						<div className="grow">
							<div className="mb-2 flex justify-between text-xs">
								<div className="col-span-2 h-3 w-28 rounded bg-slate-200"></div>
								<div className="col-span-2 h-3 w-28 rounded bg-slate-200"></div>
							</div>
							<div className="col-span-2 h-4 w-full rounded bg-slate-200"></div>
						</div>
					</div>
				</div>
			))}
		</>
	)
}

const EpisodeList = ({ episodes, slug }) => {
	return (
		<>
			{episodes.map((item, i) => (
				<Link href={`/episode/${slug}_${item.id_eps}`} key={i}>
					<div className="flex gap-2 border-b-2 border-solid border-white/40 py-1 text-white hover:bg-color-menime">
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
			))}
		</>
	)
}

export default AnimePage
