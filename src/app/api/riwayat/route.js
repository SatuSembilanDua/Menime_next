import { NextRequest, NextResponse } from "next/server"
import prisma from "../../../../prisma/client"

export const GET = async (request) => {
	try {
		console.log("Riwayat")
		const riwayat = await prisma.riwayat.findMany()
		console.log(riwayat)
		// const animes = await getAllAnime()
		return NextResponse.json(riwayat, { status: 200 })
	} catch (error) {
		return new Response("Failed to fetch all anime", { status: 500 })
	}
}

export const POST = async (request) => {
	try {
		console.log("Riwayat")
		const body = await request.json()
		const title = body.title.split("/").reverse()
		let judul = body.title == "/" ? "Menime" : title.join(" - ")

		const riwayat = await prisma.riwayat.create({
			data: {
				link: body.link,
				title: judul,
				desc: btoa(JSON.stringify(body.desc)),
			},
		})
		// console.log(riwayat)
		// const animes = await getAllAnime()
		return NextResponse.json(riwayat, { status: 200 })
	} catch (error) {
		return new Response("Failed to fetch all anime", { status: 500 })
	}
}
