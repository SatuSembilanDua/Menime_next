"use client"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

const NavKey = ({ next, prev }) => {
	const KEYS = ["91", "[", "93", "]"]
	const router = useRouter()
	// const savedHandler = useRef()
	const handler = ({ key }) => {
		if (KEYS.includes(String(key))) {
			if (key == "]") {
				router.push(`/episode/${next}`)
			}
			if (key == "[") {
				router.push(`/episode/${prev}`)
			}
		}
	}

	useEffect(() => {
		window.addEventListener("keydown", handler)
		return () => {
			window.removeEventListener("keydown", handler)
		}
	}, [])
	return <></>
}

export default NavKey
