import { getMetaApi, getAnime, getEpisode } from "@/libs/perapian"
import {
	addMeta,
	deleteMeta,
	doneMeta,
	getMeta,
	updateMetadbg,
} from "@/libs/models/tbl_meta"
import {
	addAnime,
	dropAnime,
	getOngoing,
	getSlug,
} from "@/libs/models/tbl_anime"
import {
	addAllEpisode,
	addEpisode,
	deleteEpisode,
	dropEpisode,
	getEps,
} from "./models/tbl_episode"

export const initMeta = async () => {
	const metaDb = await getMeta()
	return metaDb
}

export const createMeta = async (metaApi) => {
	const mt = await addMeta(metaApi)
	await updateMeta(mt.id)
}

export const updateMeta = async (id) => {
	return await doneMeta(id)
}

export const tambahAnime = async (animeApi) => {
	for (let anime of animeApi) {
		const inst = await addAnime(anime)
		if (inst == null) {
			break
		}
	}
}

export const tambahAllEpisode = async () => {
	// await dropEpisode()
	const slugs = await getSlug()
	for (let { link_anime } of slugs) {
		console.log(link_anime)
		const episodes = await getEpisode(link_anime)
		await addAllEpisode(episodes)
	}
}

export const updateEpisode = async (metaApi, metaDb) => {
	if (metaApi.hash == metaDb.hash) {
		console.log("Nothing")
		return true
	}
	const mt = await addMeta(metaApi)
	console.log(metaApi.hash)
	console.log(metaDb.hash)
	if (metaApi.command == "ongoing") {
		const slugs = await getOngoing()
		for (let { id_anime, link_anime } of slugs) {
			const fetchData = await getEpisode(link_anime)
			const dbData = await getEps(id_anime)
			console.log(fetchData.length, dbData.length)
			if (fetchData.length != dbData.length) {
				console.log(id_anime, link_anime)
				const diff = fetchData.filter(
					(item) =>
						!dbData.some((item2) => item2.id_episode == item.id_episode),
				)
				await addAllEpisode(diff)
			}
		}
		await updateMeta(mt.id)
		return true
	}
	if (metaApi.command == "reset") {
		await dropEpisode()
		await dropAnime()
		const animeApi = await getAnime()
		await tambahAnime(animeApi)
		await tambahAllEpisode()
		await updateMeta(mt.id)
		return true
	}
}

export const initMenime = async () => {
	const metaApi = await getMetaApi()
	const metaDb = await initMeta()
	if (metaDb == null) {
		await createMeta(metaApi)
		const animeApi = await getAnime()
		await tambahAnime(animeApi)
		await tambahAllEpisode()
		return true
	} else {
		// TODO : update
		// await updateMetadbg(6, "4a35d1590d91f8aba90c526660abedff")
		// await deleteMeta(7)
		// await deleteEpisode("ME0012001112")
		// await deleteEpisode("ME0012001111")
		updateEpisode(metaApi, metaDb)
	}
}
