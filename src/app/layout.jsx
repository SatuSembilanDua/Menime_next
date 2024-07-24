import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "Menime",
	description:
		"Menine adalah situs nonton anime sub Indo, streaming anime online bahasa Indonesia gratis.",
	metadataBase: new URL("http://menime.epizy.com"),
	openGraph: {
		title: "Menime",
		description:
			"Menine adalah situs nonton anime sub Indo, streaming anime online bahasa Indonesia gratis.",
		url: "http://menime.epizy.com",
		siteName: "Menime",
		images: [
			{
				url: "http://menime.epizy.com/assets/img/icons.webp",
				with: 1366,
				height: 396,
			},
			{
				url: "http://menime.epizy.com/assets/img/icons.png",
				with: 1366,
				height: 396,
				alt: "Menime logo",
			},
		],
		locale: "id_ID",
		type: "website",
	},
}

export const viewport = {
	width: 1,
	themeColor: "#e50914",
}

export default function RootLayout({ children }) {
	return (
		<html lang="id">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
