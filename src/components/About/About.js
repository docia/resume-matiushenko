function About() {
	return (
		<section
			id="about-me"
			className="flex flex-col items-center justify-center min-h-screen py-16"
		>
			<div className="container px-14 grid md:grid-cols-3 gap-8 items-center max-w-screen-lg ">
				<div className="avatar flex justify-center items-center md:px-0">
					<img
						className="rounded-full w-60 h-30"
						alt="my avatar"
						src="/images/avatar2.jpg"
					></img>
				</div>
				<div
					id="introduction"
					className="md:col-span-2 flex flex-col space-y-12 items-center md:items-start max-w-prose"
				>
					<h2 className="font-ubuntu text-xl ">About Me</h2>
					<p className="text-left font-nanum max-w-lg">
						Hi! I'm frontend developer. "Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit
						esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum."
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
