"use client"
import ArrowFatLeft from "@/assets/ArrowFatLeft"
import CaretDoubleLeft from "@/assets/CaretDoubleLeft"
import CaretDoubleRight from "@/assets/CaretDoubleRight"
import FullScreen from "@/assets/FullScreen"
import ListIcon from "@/assets/ListIcon"
import ErrorPage from "@/components/ErrorPage"
import Loading from "@/components/Loading"
import useAnime from "@/hooks/useAnime"
import useEpisode from "@/hooks/useEpisode"
import useEventListener from "@/hooks/useEventListener"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
// LogoImage

const EpisodePage = ({ params }) => {
	const menuContainer = useRef()
	const menu = useRef()

	const param = params.slug.split("_")
	const ideps = param.pop()
	const slug = param.join("_")

	const { data: anime, isLoading: isLoadingAnim } = useAnime(slug)
	const { data: fetchEpisode, isLoading: isLoadingEpisode } = useEpisode(
		slug,
		ideps,
	)

	useEffect(() => {
		if (
			anime?.judul_anime != undefined ||
			fetchEpisode?.current.judul != undefined ||
			!isLoadingAnim ||
			!isLoadingEpisode
		) {
			document.title = `${anime?.judul_anime} - ${fetchEpisode?.current.eps} - ${fetchEpisode?.current.judul} | Menime `
		}
	}, [anime, fetchEpisode, isLoadingAnim, isLoadingEpisode])

	if (isLoadingAnim) {
		return <LoadingAnim />
	}
	if (!anime) {
		return <ErrorAnim pesan={"Anime tidak ditemukan!"} />
	}

	const menuClick = () => {
		if (menuContainer.current.classList.contains("hidden")) {
			menuContainer.current.classList.toggle("block")
			menuContainer.current.classList.toggle("hidden")
			setTimeout(() => {
				menu.current.style.left = "0"
				// listEps.current.classList.add("hidden")
			}, 210)
		} else {
			menu.current.style.left = "-1000px"
			setTimeout(() => {
				menuContainer.current.classList.toggle("block")
				menuContainer.current.classList.toggle("hidden")
			}, 210)
		}
	}

	return (
		<>
			<ShowEpisode
				data={fetchEpisode}
				slug={slug}
				isLoading={isLoadingEpisode}
				menuClick={menuClick}
			/>
			<MenuEpisode
				data={fetchEpisode}
				slug={slug}
				menuContainer={menuContainer}
				menu={menu}
				menuClick={menuClick}
			/>
		</>
	)
}

const MenuEpisode = ({ data, slug, menuContainer, menu, menuClick }) => {
	// if (!data) return ""
	const prevSlug =
		data?.prev.id_eps == undefined ? "" : `/episode/${slug}_${data.prev.id_eps}`
	const nextSlug =
		data?.next.id_eps == undefined ? "" : `/episode/${slug}_${data.next.id_eps}`

	return (
		<>
			<div className="hidden" ref={menuContainer}>
				<div
					className="t-0 l-0 fixed z-[9997] h-screen w-screen bg-black/80"
					onClick={() => menuClick()}
				></div>
				<div
					className="menu-bar fixed z-[9998] h-screen w-2/5 overflow-hidden bg-color-menime transition-[left] duration-200 ease-in"
					ref={menu}
				>
					<div className="flex h-dvh flex-col">
						<div className="flex justify-center border-b-2 border-solid border-black bg-[#222] p-[20px]">
							<Image
								width={287}
								height={83}
								src={`/imgs/icons.webp`}
								alt="logo menime"
								className="w-1/2"
							/>
						</div>
						<div>
							<MenuItem
								href={`/anime/${slug}`}
								icon={<ArrowFatLeft width={24} height={24} />}
								text={"Kembali"}
							/>
							<MenuItem
								href={`${prevSlug}`}
								icon={<CaretDoubleLeft width={24} height={24} />}
								text={"Episode Sebelumnya"}
								// onMClick={() => menuClick()}
							/>
							<MenuItem
								href={`${nextSlug}`}
								icon={<CaretDoubleRight width={24} height={24} />}
								text={"Episode Berikutnya"}
								// onMClick={() => menuClick()}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

const ShowEpisode = ({ data, isLoading, menuClick, slug }) => {
	const router = useRouter()
	const [isFull, setIsFull] = useState(false)
	const KEYS = ["91", "[", "93", "]"]
	const prevSlug =
		data?.prev.id_eps == undefined ? "" : `/episode/${slug}_${data.prev.id_eps}`
	const nextSlug =
		data?.next.id_eps == undefined ? "" : `/episode/${slug}_${data.next.id_eps}`

	const handler = ({ key }) => {
		if (KEYS.includes(String(key))) {
			if (key == "]") {
				// if (btnNav.next === "") return
				// Router(`${nextSlug}`)
				router.push(`${nextSlug}`)
			}
			if (key == "[") {
				// if (btnNav.prev === "") return
				// navigate(`${prevSlug}`)
				router.push(`${prevSlug}`)
			}
		}
	}
	useEventListener("keydown", handler)

	if (isLoading) {
		return <LoadingAnim />
	}
	if (!data && !isLoading) {
		return <ErrorAnim pesan={"Episode Tidak ditemukan!"} />
	}
	const episode = data.current

	const fullScreen = () => {
		setIsFull((prevState) => !prevState)
		if (isFull) {
			document.exitFullscreen()
		} else {
			document.documentElement.requestFullscreen()
		}
	}

	return (
		<>
			<iframe
				className="t-0 l-0 absolute h-dvh w-dvw"
				src={episode.vid}
				allowFullScreen={true}
			></iframe>
			<div className="t-0 l-0 absolute z-[9996] w-screen px-8 py-4">
				<div className="flex items-center justify-between gap-4 text-color-menime">
					<div>
						<button onClick={() => menuClick()}>
							<ListIcon width={32} height={32} />
						</button>
					</div>
					<div>
						<h1 className="text-white">{`${episode.eps} - ${episode.judul}`}</h1>
					</div>
					<div>
						<button onClick={() => fullScreen()}>
							<FullScreen width={32} height={32} />
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

const LoadingAnim = () => (
	<div className="flex h-full items-center justify-center">
		<Loading />
	</div>
)

const ErrorAnim = ({ pesan }) => (
	<div className="flex h-full flex-col items-center justify-center">
		<ErrorPage message={pesan} />
		<Link href={"/"}>Kembali</Link>
	</div>
)

const MenuItem = ({ href, icon, text, onMClick, isActive }) => {
	const mia = useRef()
	let mcs =
		"flex items-center md:gap-8 gap-2 md:p-4 p-2 text-white hover:bg-[#222] transition-background ease-in duration-200"
	if (isActive) {
		mcs =
			"flex items-center md:gap-8 gap-2 md:p-4 p-2 text-white bg-[#222] transition-background ease-in duration-200"
	}

	return (
		<>
			<Link href={href} onClick={onMClick} ref={mia}>
				<div className={mcs}>
					{icon}
					<p className="text-xs md:text-xl">{text}</p>
				</div>
			</Link>
		</>
	)
}

export default EpisodePage
