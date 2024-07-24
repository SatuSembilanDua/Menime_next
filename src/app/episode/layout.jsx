const EpisodeLayout = ({ children }) => {
	return (
		<>
			<div className="fixed bottom-0 left-0 right-0 top-0 h-dvh w-screen overflow-hidden">
				{children}
			</div>
		</>
	)
}

export default EpisodeLayout
