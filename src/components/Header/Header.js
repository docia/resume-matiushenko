import { useEffect, useRef } from "react";

function Header() {
	const myRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const parallax = document.getElementById("header");
			const offset = window.window.scrollY;
			if (parallax) parallax.style.backgroundPosition = offset * 0.7 + "px";
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<section ref={myRef} id="header" className="relative flex h-screen w-full">
			<div className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat bg-galaxy opacity-50"></div>
			<div className="relative flex-1 flex items-center flex-col justify-center text-xl">
				<h1 className="opacity-100 font-ubuntu text-5xl">Anastasiia Matiushenko</h1>
				<p className="opacity-100 font-nanum">...my interactive resume</p>
			</div>
		</section>
	);
}

export default Header;
