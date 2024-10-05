// "use client"
// import MonitorPlay from "@/assets/MonitorPlay"
// import SortAscending from "@/assets/SortAscending"
// import SortDescending from "@/assets/SortDescending"
// import ErrorPage from "@/components/ErrorPage"
// import Loading from "@/components/Loading"
// import useAnime from "@/hooks/useAnime"
// import useEpisodes from "@/hooks/useEpisodes"
// import Link from "next/link"
// import { useEffect, useState } from "react"

import PageAnime from "@/components/PageAnime"
import { getAnime, getSlugs } from "@/libs/models/tbl_anime"

export const revalidate = 3600

let data

export const generateStaticParams = async () => {
	const pages = await getSlugs()
	return pages.map((item) => ({
		slug: item.link_anime,
	}))
}

const getAnimeFromSlug = async (slug) => {
	if (!data) {
		data = await getAnime(slug)
	}
	return data
}

export const generateMetadata = async ({ params: { slug } }) => {
	const data = await getAnimeFromSlug(slug)
	return {
		title: `${data.judul_anime} | Menime`,
	}
}

const AnimePage = async ({ params: { slug } }) => {
	const anime = await getAnimeFromSlug(slug)
	// const slugs = await getSlugs()
	// console.log(slugs.map((item) => item.link_anime))
	return (
		<>
			<h2 className="page-title">{`LIST EPISODE ${anime?.judul_anime.toUpperCase()}`}</h2>
			<PageAnime slug={slug} />
		</>
	)
}

export default AnimePage
