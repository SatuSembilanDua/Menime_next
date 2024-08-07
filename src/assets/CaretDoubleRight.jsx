const CaretDoubleRight = (props) => {
	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
				<rect width={256} height={256} fill="none" />
				<polyline
					points="56 48 136 128 56 208"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={16}
				/>
				<polyline
					points="136 48 216 128 136 208"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={16}
				/>
			</svg>
		</>
	)
}

export default CaretDoubleRight
