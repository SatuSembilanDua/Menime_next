import prisma from "../../../prisma/client"

export const addAnime = async (anime) => {
	if (
		["one_piece_special", "one_piece_ova", "one_piece_movie"].includes(
			anime.link_anime,
		)
	) {
		return false
	}
	const data = {
		id_anime: anime.id_anime,
		judul_anime: anime.judul_anime,
		link_anime: anime.link_anime,
		origin: anime.origin,
		sts: parseInt(anime.sts),
		src: parseInt(anime.src),
		img: anime.img,
		studio: anime.studio,
		season: anime.season,
		tags: anime.tags,
		ket_sts: parseInt(anime.ket_sts),
		display: parseInt(anime.display),
		gambar: anime.gambar,
	}
	try {
		const dataAnime = await prisma.anime.upsert({
			where: {
				id_anime: data.id_anime,
			},
			update: data,
			create: data,
		})
		return dataAnime
	} catch (error) {
		console.log(error.message)
	}
	return null
}

export const getSlug = async () => {
	const data = await prisma.anime.findMany({
		select: {
			link_anime: true,
		},
	})
	return data
}

export const getOngoing = async () => {
	const data = await prisma.anime.findMany({
		select: {
			id_anime: true,
			link_anime: true,
		},
		where: {
			sts: 0,
		},
	})
	return data
}

export const getAllAnime = async () => {
	const data = await prisma.anime.findMany({
		orderBy: [
			{
				sts: "asc",
			},
			{
				judul_anime: "asc",
			},
		],
	})
	return data
}

export const getAnime = async (slug) => {
	const data = await prisma.anime.findFirst({
		where: {
			link_anime: slug,
		},
	})
	return data
}

export const getAnim = async (slug) => {
	const data = await prisma.anime.findFirst({
		select: {
			id_anime: true,
			sts: true,
		},
		where: {
			link_anime: slug,
		},
	})
	return data
}

export const dropAnime = async () => {
	try {
		await prisma.anime.deleteMany({})
	} catch (error) {
		console.log(error.message)
	}
}
