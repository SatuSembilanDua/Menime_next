import useSWR from "swr"
import fetcher from "@/libs/fetcher"

const useAnimes = () => {
	const url = `/api/web/anime`
	const { data, error, isLoading, mutate } = useSWR(url, fetcher)

	return {
		data,
		error,
		isLoading,
		mutate,
	}
}

export default useAnimes
