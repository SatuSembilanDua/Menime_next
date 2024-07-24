import { getAnim } from "@/libs/models/tbl_anime"
import {
	getAllEpisode,
	getIdEpisode,
	getEpisode,
} from "@/libs/models/tbl_episode"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request, { params }) => {
	try {
		const slug = params.slug
		const id = params.id

		const anime = await getAnim(slug)
		if (anime == null) {
			return NextResponse.json([], { status: 404 })
		}
		const episode = await getEpisode(id, anime)
		if (episode == null) {
			return NextResponse.json([], { status: 404 })
		}
		return NextResponse.json(episode, { status: 200 })
	} catch (error) {
		console.log(error.message)
		return new Response("Failed to fetch episode", { status: 500 })
	}
}
