import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
	const sectionRef = useRef();

	useGSAP(
		() => {
			const animateFrom = (elem, direction = 1) => {
				let x = 0;
				let y = direction * 100;

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
						delay: "delay",
					}
				);
			};
			const hide = (elem) => {
				gsap.set(elem, { autoAlpha: 0 });
			};

			const elements = gsap.utils.toArray(
				sectionRef.current.querySelectorAll(".gs_reveal")
			);

			elements.forEach((elem, index) => {
				hide(elem);

				ScrollTrigger.create({
					trigger: elem,
					onEnter: () => {
						setTimeout(() => {
							animateFrom(elem);
						}, index * 200);
					},
					onEnterBack: () => {
						setTimeout(() => {
							animateFrom(elem, -1);
						}, index * 200);
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
		<section className="flex flex-col items-center min-h-screen space-y-12">
			<div className="container grid md:grid-cols-3 gap-8 items-center ">
				<div className="md:col-start-2 gs_reveal ">
					<h2 className="font-ubuntu text-xl py-2">Skills</h2>
				</div>
			</div>
			<div
				ref={sectionRef}
				className="container grid md:grid-cols-3 gap-2 mb-16"
			>
				<div className="md:col-start-1 gs_reveal max-w-sm p-6 bg-white border border-gray-200 rounded-r-3xl shadow dark:bg-gray-800 dark:border-gray-700">
					<h2 className="font-nanum">Ukrainian (mother tongue)</h2>
					<h2 className="font-nanum text-orange">English (advanced)</h2>
					<h2 className="font-nanum">Polish (upper-intermidiate)</h2>
					<h2 className="font-nanum">German (survivable)</h2>
				</div>
				<div className="md:col-start-2 gs_reveal max-w-sm p-6 bg-white border border-gray-200 rounded-b-3xl shadow dark:bg-gray-800 dark:border-gray-700">
					<h2 className="font-nanum">JavaScript Front (basic Back)</h2>
					<h2 className="font-nanum">React</h2>
					<h2 className="font-nanum">Redux in React</h2>
					<h2 className="font-nanum">Vue</h2>
					<h2 className="font-nanum">Pinia</h2>
					<h2 className="font-nanum">MySQL | Postgress</h2>
					<h2 className="font-nanum">Git</h2>
					<h2 className="font-nanum">
						HTML | CSS | Bootstrap | Tailwind | MUI
					</h2>
					<h2 className="font-nanum">Figma</h2>
				</div>
				<div className="md:col-start-3 gs_reveal max-w-sm p-6 bg-white border border-gray-200 rounded-l-3xl shadow dark:bg-gray-800 dark:border-gray-700">
					<h2 className="font-nanum">High commitment</h2>
					<h2 className="font-nanum">Problem-solving</h2>
					<h2 className="font-nanum">Collaboration</h2>
				</div>
			</div>
			{/* <div className="container grid md:grid-cols-2 gap-2 mb-16"></div> */}
		</section>
	);
}

export default Skills;
