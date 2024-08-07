const MonitorPlay = (props) => {
	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
				<rect width={256} height={256} fill="none" />
				<rect
					x={32}
					y={48}
					width={192}
					height={144}
					rx={16}
					transform="translate(256 240) rotate(180)"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={16}
				/>
				<line
					x1={160}
					y1={224}
					x2={96}
					y2={224}
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={16}
				/>
				<polygon
					points="160 120 112 88 112 152 160 120"
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

export default MonitorPlay
