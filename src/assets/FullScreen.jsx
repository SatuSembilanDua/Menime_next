const FullScreen = (props) => {
	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
				<rect width={256} height={256} fill="none" />
				<polyline
					points="160 48 208 48 208 96"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={16}
				/>
				<line
					x1={152}
					y1={104}
					x2={208}
					y2={48}
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={16}
				/>
				<polyline
					points="96 208 48 208 48 160"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={16}
				/>
				<line
					x1={104}
					y1={152}
					x2={48}
					y2={208}
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={16}
				/>
				<polyline
					points="208 160 208 208 160 208"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={16}
				/>
				<line
					x1={152}
					y1={152}
					x2={208}
					y2={208}
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={16}
				/>
				<polyline
					points="48 96 48 48 96 48"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={16}
				/>
				<line
					x1={104}
					y1={104}
					x2={48}
					y2={48}
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

export default FullScreen
