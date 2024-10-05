import axios from "axios"

const fetcher = (url) => {
	console.log(`fetch ${url}`)
	return axios
		.get(url)
		.then((res) => res.data)
		.catch((error) => {
			if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				console.log("%cError Response", "color: red; font-size: 20px")
				console.log(error.response.data)
				console.log(error.response.status)
				console.log(error.response.headers)
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js
				console.log("%cError Request", "color: red; font-size: 20px")
				console.log(error.request)
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log("%cError ELSE", "color: red; font-size: 20px")
				console.log("Error", error.message)
			}
			console.log(error.config)
			throw error
		})
}

export default fetcher
