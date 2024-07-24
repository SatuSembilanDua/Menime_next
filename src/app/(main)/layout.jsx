import HeaderPage from "@/components/HeaderPage"
import FooterPage from "@/components/FooterPage"

export default function HomeLayout({ children }) {
	return (
		<>
			<HeaderPage />
			<div className="relative min-h-[540px] bg-color-hitam px-5 py-5 pt-12 md:px-12">
				{children}
			</div>
			<FooterPage />
		</>
	)
}
