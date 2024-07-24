import prisma from "../../../prisma/client"

export const getMeta = async () => {
	const data = await prisma.meta.findFirst({
		orderBy: {
			createdAt: "desc",
		},
	})
	return data
}

export const addMeta = async (meta) => {
	try {
		const dataMeta = await prisma.meta.create({
			data: meta,
		})
		return dataMeta
	} catch (error) {
		console.log(error.message)
	}
	return null
}

export const doneMeta = async (id) => {
	try {
		const dataMeta = await prisma.meta.update({
			where: {
				id: id,
			},
			data: {
				status: 1,
			},
		})
		return dataMeta
	} catch (error) {
		console.log(error.message)
	}
	return null
}

export const updateMetadbg = async (id, hash) => {
	try {
		const dataMeta = await prisma.meta.update({
			where: {
				id: id,
			},
			data: {
				hash: hash,
				status: 1,
			},
		})
		return dataMeta
	} catch (error) {
		console.log(error.message)
	}
	return null
}

export const deleteMeta = async (id) => {
	try {
		const dataMeta = await prisma.meta.delete({
			where: {
				id: id,
			},
		})
	} catch (error) {
		console.log(error.message)
	}
}
