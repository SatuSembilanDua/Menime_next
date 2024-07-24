export const getMetaApi = async () => {
	const url = `${process.env.API_URL}/meta.json`
	console.log(`fetch ${url}`)
	const response = await fetch(url)
	const data = await response.json()
	return data
}

export const getAnime = async () => {
	const url = `${process.env.API_URL}/anime.json`
	console.log(`fetch ${url}`)
	const response = await fetch(url)
	const data = await response.json()
	return data
}

export const getEpisode = async (slug) => {
	const url = `${process.env.API_URL}/${slug}.json`
	console.log(`fetch ${url}`)
	const response = await fetch(url)
	const data = await response.json()
	return parseEpisodes(data)
}

const parseEpisodes = ({ anime, episodes }) => {
	// const {anime, episodes} = data
	const data = []
	for (let episode of episodes) {
		let eps =
			anime.ket_sts == "3" ? `${episode.book} - ${episode.eps}` : episode.eps
		let link = episode.link ? episode.link : ""
		data.push({
			id_episode: episode.id_episode,
			id_anime: episode.id_anime,
			link: link,
			eps: eps,
			judul: episode.judul,
			date: episode.date,
			id_eps: parseInt(episode.id_eps),
			vid: episode.vid,
		})
	}
	return data
}
