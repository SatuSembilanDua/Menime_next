import prisma from "../../../prisma/client"

export const addEpisode = async (episode) => {
	const id_episode = episode.id_episode
	console.log(`add episodes ${id_episode}`)
	try {
		const data = await prisma.episode.upsert({
			where: {
				id_episode: id_episode,
			},
			update: episode,
			create: episode,
		})
		return data
	} catch (error) {
		console.log(error.message)
	}
	return null
}

export const addAllEpisode = async (episodes) => {
	try {
		const data = await prisma.episode.createMany({
			data: episodes,
		})
		return data
	} catch (error) {
		console.log(error.message)
	}
	return null
}

export const dropEpisode = async () => {
	try {
		await prisma.episode.deleteMany({})
	} catch (error) {
		console.log(error.message)
	}
}

export const getIdEpisode = async (
	id_anime,
	page,
	perPage,
	sort = false,
	search = "",
) => {
	const id_eps = (page - 1) * perPage
	const query = {
		select: {
			id_episode: true,
		},
		where: {
			id_anime,
		},
		orderBy: {
			id_eps: sort ? "desc" : "asc",
		},
	}
	if (search != "") {
		query.where["OR"] = [
			{
				eps: {
					contains: search,
				},
			},
			{
				judul: {
					contains: search,
				},
			},
		]
	}
	const episodes = await prisma.episode.findMany(query)
	const data = episodes[id_eps]
	const next_page = (page + 1) * 10
	const hasNext = episodes[next_page] == undefined ? false : true
	return { cursor: data, length: episodes.length, hasNext: hasNext }
}

export const getAllEpisode = async (
	id_anime,
	myCursor,
	perPage,
	sort = false,
	search = "",
) => {
	const query = {
		select: {
			id_episode: true,
			id_anime: true,
			eps: true,
			judul: true,
			date: true,
			id_eps: true,
		},
		take: perPage,
		cursor: {
			id_episode: myCursor,
		},
		where: {
			id_anime,
		},
		orderBy: {
			id_eps: sort ? "desc" : "asc",
		},
	}
	if (search != "") {
		query.where["OR"] = [
			{
				eps: {
					contains: search,
				},
			},
			{
				judul: {
					contains: search,
				},
			},
		]
	}
	const data = await prisma.episode.findMany(query)
	return data
}

export const getEpisode = async (id_eps, anime) => {
	const sort = {
		id_eps: anime.sts == 1 ? "asc" : "desc",
	}
	const prev =
		(await prisma.episode.findFirst({
			select: {
				id_eps: true,
			},
			where: {
				id_anime: anime.id_anime,
				id_eps: parseInt(id_eps) - 1,
			},
			orderBy: sort,
		})) || {}
	const current =
		(await prisma.episode.findFirst({
			where: {
				id_anime: anime.id_anime,
				id_eps: parseInt(id_eps),
			},
			orderBy: sort,
		})) || {}
	const next =
		(await prisma.episode.findFirst({
			select: {
				id_eps: true,
			},
			where: {
				id_anime: anime.id_anime,
				id_eps: parseInt(id_eps) + 1,
			},
			orderBy: sort,
		})) || {}

	return {
		prev,
		current,
		next,
	}
}

export const getEps = async (id_anime) => {
	const data = await prisma.episode.findMany({
		where: {
			id_anime,
		},
	})
	return data
}

export const deleteEpisode = async (id) => {
	try {
		await prisma.episode.delete({
			where: {
				id_episode: id,
			},
		})
	} catch (error) {
		console.log(error.message)
	}
}
