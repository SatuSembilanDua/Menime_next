import useSWR from "swr"
import fetcher from "@/libs/fetcher"

const useAnime = (slug) => {
	const url = `/api/web/anime/${slug}`
	const { data, error, isLoading, mutate } = useSWR(url, fetcher)

	return {
		data,
		error,
		isLoading,
		mutate,
	}
}

export default useAnime
