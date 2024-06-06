import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function About() {
	const sectionRef = useRef();

	useGSAP(
		() => {
			const animateFrom = (elem, direction = 1) => {
				let x = 0;
				let y = direction * 100;
				if (elem.classList.contains("gs_reveal_fromLeft")) {
					x = -100;
					y = 0;
				} else if (elem.classList.contains("gs_reveal_fromRight")) {
					x = 100;
					y = 0;
				}
				elem.style.transform = `translate(${x}px, ${y}px)`;
				elem.style.opacity = "0";
				gsap.fromTo(
					elem,
					{ x, y, autoAlpha: 0 },
					{
						duration: 1.25,
						x: 0,
						y: 0,
						autoAlpha: 1,
						ease: "expo",
						overwrite: "auto",
					}
				);
			};
			const hide = (elem) => {
				gsap.set(elem, { autoAlpha: 0 });
			};

			const elements = gsap.utils.toArray(
				sectionRef.current.querySelectorAll(".gs_reveal")
			);

			elements.forEach((elem) => {
				hide(elem); 

				ScrollTrigger.create({
					trigger: elem,
					onEnter: () => {
						animateFrom(elem);
					},
					onEnterBack: () => {
						animateFrom(elem, -1);
					},
					onLeave: () => {
						hide(elem);
					},
				});
			});

			return () => {
				ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			};
		},
		{ scope: sectionRef }
	);

	return (
		<section
			id="about-me"
			className="flex flex-col items-center justify-center min-h-screen py-16"
			ref={sectionRef}
		>
			<div className="container px-14 grid md:grid-cols-3 gap-8 items-center max-w-screen-lg ">
				<div className="avatar flex justify-center items-center md:px-0 gs_reveal gs_reveal_fromLeft">
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
					<h2 className="font-ubuntu text-xl  gs_reveal">About Me</h2>
					<p className="text-left font-nanum max-w-lg  gs_reveal">
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
