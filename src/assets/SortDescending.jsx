const SortDescending = (props) => {
	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
				<rect width={256} height={256} fill="none" />
				<line
					x1={48}
					y1={128}
					x2={120}
					y2={128}
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={16}
				/>
				<line
					x1={48}
					y1={64}
					x2={104}
					y2={64}
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={16}
				/>
				<line
					x1={48}
					y1={192}
					x2={184}
					y2={192}
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={16}
				/>
				<polyline
					points="144 88 184 48 224 88"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={16}
				/>
				<line
					x1={184}
					y1={48}
					x2={184}
					y2={144}
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

export default SortDescending
