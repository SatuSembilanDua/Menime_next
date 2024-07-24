import { getAnim } from "@/libs/models/tbl_anime"
import { getAllEpisode, getIdEpisode } from "@/libs/models/tbl_episode"
import { NextRequest, NextResponse } from "next/server"

const perPage = 10

export const GET = async (request, { params }) => {
	try {
		let page = request.nextUrl.searchParams.get("page")
		page = page == null ? 1 : parseInt(page)
		let sort = request.nextUrl.searchParams.get("sort")
		sort = sort == null ? false : sort == "1" ? true : false
		let search = request.nextUrl.searchParams.get("search")
		search = search == null ? "" : search
		const slug = params.slug

		const anime = await getAnim(slug)
		if (anime == null) {
			return NextResponse.json([], { status: 404 })
		}
		sort = anime.sts == 0 ? !sort : sort
		const { cursor, length, hasNext } = await getIdEpisode(
			anime.id_anime,
			page,
			perPage,
			sort,
			search,
		)
		if (cursor == null) {
			return NextResponse.json([], { status: 404 })
		}
		const episode = await getAllEpisode(
			anime.id_anime,
			cursor.id_episode,
			perPage,
			sort,
			search,
		)
		if (episode == null) {
			return NextResponse.json([], { status: 404 })
		}
		const ret = {
			data: episode,
			page: page,
			length: length,
			has_next: hasNext,
		}
		return NextResponse.json(ret, { status: 200 })
	} catch (error) {
		console.log(error.message)
		return new Response("Failed to fetch episode", { status: 500 })
	}
}
