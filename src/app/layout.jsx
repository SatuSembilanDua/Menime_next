import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "Menime",
	description:
		"Menine adalah situs nonton anime sub Indo, streaming anime online bahasa Indonesia gratis.",
	metadataBase: new URL("http://menime.vercel.app"),
	openGraph: {
		title: "Menime",
		description:
			"Menine adalah situs nonton anime sub Indo, streaming anime online bahasa Indonesia gratis.",
		url: "http://menime.vercel.app",
		siteName: "Menime",
		images: [
			{
				url: "https://menime.vercel.app/imgs/icons.webp",
				with: 1366,
				height: 396,
			},
			{
				url: "https://menime.vercel.app/imgs/icons.webp",
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
