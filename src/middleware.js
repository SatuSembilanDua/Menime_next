import { NextResponse } from "next/server"
// import { HistoryModel } from "./lib/repo"

export async function middleware(request) {
	const postData = {
		link: request.url,
		title: request.nextUrl.pathname,
		desc: {
			ip: request.headers.get("x-forwarded-for"),
			uag: request.headers.get("user-agent"),
			geo: request.geo,
		},
	}
	console.log(postData)
	// const addHistory = await HistoryModel.add(postData)
	// console.log(addHistory)
	const url = `${request.nextUrl.origin}/api/riwayat`
	const response = await fetch(url, {
		method: "POST",
		body: JSON.stringify(postData),
	})
	// // const data = await response.json()
	return NextResponse.next()
}

export const config = {
	matcher: ["/((?!imgs|_next/static|_next/image|favicon.ico|api/riwayat|api/web).*)"],
}
