import { apiResonse } from "@/lib/apiroute"
import { HistoryModel as model } from "@/lib/repo"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request) => {
	return apiResonse(() => model.getAll())
}

export const POST = async (request) => {
	try {
		console.log("Riwayat")
		const body = await request.json()
		const title = body.title.split("/").reverse()
		let judul = body.title == "/" ? "Menime" : title.join(" - ")

		const riwayat = await model.add({
			link: body.link,
			title: judul,
			desc: btoa(JSON.stringify(body.desc)),
		})
		// console.log(riwayat)
		// const animes = await getAllAnime()
		return NextResponse.json(riwayat, { status: 200 })
	} catch (error) {
		return new Response("Failed to fetch all anime", { status: 500 })
	}
}
