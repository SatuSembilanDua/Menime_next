import fetcher from "@/libs/fetcher"
import useSWR from "swr"

const useEpisode = (slug, ideps) => {
	const url = `/api/web/episode/${slug}/${ideps}`
	const { data, error, isLoading, mutate } = useSWR(url, fetcher)

	return {
		data,
		error,
		isLoading,
		mutate,
	}
}

export default useEpisode
