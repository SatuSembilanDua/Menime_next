import { getAnime } from "@/libs/models/tbl_anime"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request, { params }) => {
	try {
		const slug = params.slug
		const post = await getAnime(slug)
		return NextResponse.json(post, { status: 200 })
	} catch (error) {
		return new Response("Failed to fetch post", { status: 500 })
	}
}
