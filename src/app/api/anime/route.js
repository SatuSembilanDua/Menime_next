import { getAllAnime } from "@/libs/models/tbl_anime"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request) => {
	try {
		console.log("ANIME")
		const animes = await getAllAnime()
		return NextResponse.json(animes, { status: 200 })
	} catch (error) {
		return new Response("Failed to fetch all anime", { status: 500 })
	}
}
