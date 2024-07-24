"use client"
import AnimeCard from "@/components/AnimeCard"
import ErrorPage from "@/components/ErrorPage"
import Loading from "@/components/Loading"
import useAnimes from "@/hooks/useAnimes"
import React from "react"

const Home = () => {
	const { data, isLoading } = useAnimes()
	if (isLoading) {
		return <Loading />
	}
	if (!data) {
		return <ErrorPage message={"Terjadi Kesalahan!"} />
	}
	return (
		<>
			<div className="grid grid-cols-3 gap-4 md:grid-cols-6 md:gap-6">
				{data.map((item, i) => (
					<AnimeCard key={i} data={item} />
				))}
			</div>
		</>
	)
}

export default Home
