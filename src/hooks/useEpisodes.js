import useSWR from "swr"
import fetcher from "@/libs/fetcher"
import { useState } from "react"
import useDebounce from "./useDebounce"

const useEpisodes = (slug) => {
	const [page, setPage] = useState(1)
	const [sort, setSort] = useState(false)
	const [search, setSearch] = useState("")
	const debounceSearch = useDebounce(search, 1000)
	const url = `/api/web/episode/${slug}?page=${page}${sort ? "&sort=1" : ""}${debounceSearch ? `&search=${debounceSearch}` : ""}`
	const { data, error, isLoading, isValidating, mutate } = useSWR(url, fetcher)

	return {
		data,
		error,
		isLoading,
		isValidating,
		mutate,
		page,
		setPage,
		sort,
		setSort,
		search,
		setSearch,
	}
}

export default useEpisodes
