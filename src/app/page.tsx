export default function Page() {
	return (
		<>
			<div className="relative w-32 h-32">
				<svg
					className="absolute inset-0 w-full h-full"
					viewBox="0 0 100 100"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop
								offset="0%"
								style={{ stopColor: "#FFD700", stopOpacity: 1 }}
							/>
							<stop
								offset="100%"
								style={{ stopColor: "#FF6347", stopOpacity: 1 }}
							/>
						</linearGradient>
						<clipPath id="myClip">
							{/* Define your custom shape here */}
							<circle cx="50" cy="50" r="40" />
						</clipPath>
					</defs>
					{/* Apply the clip path to the shape */}
					<rect
						x="0"
						y="0"
						width="100"
						height="100"
						fill="url(#grad)"
						clipPath="url(#myClip)"
					/>
				</svg>
			</div>
			<div className="relative w-32 h-32 bg-gradient-to-br from-yellow-400 to-red-600">
				<div className="absolute inset-0 flex items-center justify-center">
					<svg
						className="absolute inset-0 w-full h-full"
						viewBox="0 0 100 100"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs>
							<clipPath id="myClip">
								{/* Define your custom shape here */}
								<circle cx="50" cy="50" r="40" />
							</clipPath>
						</defs>
						{/* Apply the clip path to the shape */}
						<rect
							x="0"
							y="0"
							width="100"
							height="100"
							fill="url(#grad)"
							clipPath="url(#myClip)"
						/>
					</svg>
				</div>
			</div>
			<div className="relative w-32 h-32 bg-gradient-to-br from-yellow-400 to-red-600">
				<div className="absolute inset-0 flex items-center justify-center">
					<svg
						className="w-24 h-24"
						viewBox="0 0 100 100"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs>
							<clipPath id="myClip">
								{/* Define your custom shape here */}
								<circle cx="50" cy="50" r="40" />
							</clipPath>
						</defs>
						{/* Apply the clip path to the shape */}
						<rect
							x="0"
							y="0"
							width="100"
							height="100"
							fill="white"
							clipPath="url(#myClip)"
						/>
					</svg>
				</div>
			</div>
			<div className="relative w-32 h-32 bg-gradient-to-tl from-yellow-400 to-red-600">
				<div className="absolute inset-0 flex items-center justify-center">
					<svg
						className="w-24 h-24"
						viewBox="0 0 100 100"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs>
							<clipPath id="myClip">
								{/* Define your custom shape here */}
								<circle cx="50" cy="50" r="40" />
							</clipPath>
						</defs>
						{/* Apply the clip path to the shape */}
						<rect
							x="0"
							y="0"
							width="100"
							height="100"
							fill="white"
							clipPath="url(#myClip)"
						/>
					</svg>
				</div>
			</div>
			<div className="relative w-32 h-32 bg-gradient-to-br from-yellow-400 to-red-600">
				<div className="absolute inset-0 flex items-center justify-center">
					<svg
						className="w-24 h-24"
						viewBox="0 0 100 100"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs>
							<linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop
									offset="0%"
									style={{ stopColor: "#FFD700", stopOpacity: 1 }}
								/>
								<stop
									offset="100%"
									style={{ stopColor: "#FF6347", stopOpacity: 1 }}
								/>
							</linearGradient>
							<clipPath id="myClip">
								{/* Define your custom shape here */}
								<circle cx="50" cy="50" r="40" />
							</clipPath>
						</defs>
						{/* Apply the clip path to the shape */}
						<rect
							x="0"
							y="0"
							width="100"
							height="100"
							fill="url(#grad)"
							clipPath="url(#myClip)"
						/>
					</svg>
				</div>
			</div>
			<div className="relative w-32 h-32">
				<div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-600">
					<div className="absolute inset-0 flex items-center justify-center">
						<svg
							className="w-24 h-24"
							viewBox="0 0 100 100"
							xmlns="http://www.w3.org/2000/svg"
						>
							<defs>
								<clipPath id="myClip">
									{/* Define your custom shape here */}
									<circle cx="50" cy="50" r="40" />
								</clipPath>
							</defs>
							{/* Apply the clip path to the shape */}
							<rect
								x="0"
								y="0"
								width="100"
								height="100"
								fill="url(#grad)"
								clipPath="url(#myClip)"
							/>
							{/* Define the gradient within the SVG */}
							<linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop
									offset="0%"
									style={{ stopColor: "#FFD700", stopOpacity: 1 }}
								/>
								<stop
									offset="100%"
									style={{ stopColor: "#FF6347", stopOpacity: 1 }}
								/>
							</linearGradient>
						</svg>
					</div>
				</div>
			</div>
			<div className="relative w-32 h-32 bg-gradient-to-br from-yellow-400 to-red-600">
				<svg
					className="absolute inset-0 w-full h-full"
					viewBox="0 0 100 100"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop
								offset="0%"
								style={{ stopColor: "#FFD700", stopOpacity: 1 }}
							/>
							<stop
								offset="100%"
								style={{ stopColor: "#FF6347", stopOpacity: 1 }}
							/>
						</linearGradient>
						<clipPath id="myClip">
							{/* Define your custom shape here */}
							<circle cx="50" cy="50" r="40" />
						</clipPath>
					</defs>
					{/* Apply the clip path to the shape */}
					<rect
						x="0"
						y="0"
						width="100"
						height="100"
						fill="url(#grad)"
						clipPath="url(#myClip)"
					/>
				</svg>
			</div>
		</>
	);
}
