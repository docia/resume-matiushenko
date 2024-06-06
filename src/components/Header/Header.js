import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

function Header() {
	const myRef = useRef(null);
	const container = useRef(null);

	useGSAP(
		() => {
			gsap.to("h1", { duration: 2, text: "Anastasiia Matiushenko" });

			const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
			tl.to("p", { duration: 3, text: "...my interactive resume" }, "+=2")
				.to("p", { duration: 1, opacity: 0 })
		},
		{ scope: container }
	);

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
			<div
				ref={container}
				className="relative flex-1 flex items-center flex-col justify-center text-xl"
			>
				<h1 className="opacity-100 font-ubuntu text-5xl"></h1>
				<p className="opacity-100 font-nanum"></p>
			</div>
		</section>
	);
}

export default Header;
