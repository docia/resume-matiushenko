import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useEffect, useRef } from "react";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

function Skills() {
	const sectionRef = useRef();

	// useEffect(() => {
	// 	gsap.set(".icon", { xPercent: -50, yPercent: -50 });

	// 	const icons = gsap.utils.toArray(".icon");
	// 	const xTos = icons.map((icon) =>
	// 		gsap.quickTo(icon, "x", { duration: 0.6, ease: "power3" })
	// 	);
	// 	const yTos = icons.map((icon) =>
	// 		gsap.quickTo(icon, "y", { duration: 0.6, ease: "power3" })
	// 	);

	// 	const angles = icons.map((_, i) => i * (Math.PI / icons.length)); // Different angles
	// 	const radius = 10; // Radius for the circular motion

	// 	const updatePosition = (e) => {
	// 		const mouseX = e.clientX;
	// 		const mouseY = e.clientY;

	// 		icons.forEach((icon, i) => {
	// 			const angle = angles[i];
	// 			const offsetX = radius * Math.cos(angle);
	// 			const offsetY = radius * Math.sin(angle);

	// 			xTos[i](mouseX + offsetX);
	// 			yTos[i](mouseY + offsetY);

	// 			// Update the angle for continuous motion
	// 			angles[i] += 0.05; // Adjust the speed of rotation
	// 		});
	// 	};

	// 	window.addEventListener("mousemove", updatePosition);

	// 	return () => {
	// 		window.removeEventListener("mousemove", updatePosition);
	// 	};
	// }, []);

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
						animateFrom(elem);

						const iconRight = elem.querySelector(".icon-follow");
						const iconLeft = elem.querySelector(".icon-inverse");
						if (iconRight) {
							gsap.to(iconRight, {
								duration: 5,
								repeat: -1,
								yoyo: true,
								ease: "power1.in",
								motionPath: {
									path: [
										{ x: 0, y: 0 },
										{ x: 10, y: -10 },
									],
									curviness: 2,
								},
								rotateZ: 50,
							});
						}
						if (iconLeft) {
							gsap.to(iconLeft, {
								duration: 5,
								repeat: -1,
								yoyo: true,
								ease: "power1.in",
								motionPath: {
									path: [
										{ x: 0, y: 0 },
										{ x: -10, y: 10 },
									],
									curviness: 2,
								},
								rotateZ: 50,
							});
						}
					},
					onEnterBack: () => {
						animateFrom(elem, -1);
					},
					onLeave: () => {
						hide(elem);
					},
				});
			});

			const handleMouseMove = (event) => {
				const iconsFollow = document.querySelectorAll(".icon-follow");
				const iconsInverse = document.querySelectorAll(".icon-inverse");
				
				const x = event.clientX / window.innerWidth;
				const y = event.clientY / window.innerHeight;

				gsap.to(iconsFollow, {
					x: x * 20 - 10,
					y: y * 20 - 10,
					ease: "power2.out",
					duration: 0.3,
				});

				gsap.to(iconsInverse, {
					x: -x * 20 + 10,
					y: -y * 20 + 10,
					ease: "power2.out",
					duration: 0.3,
				});
			};

			document.addEventListener("mousemove", handleMouseMove);

			return () => {
				ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
				document.removeEventListener("mousemove", handleMouseMove);
			};
		},
		{ scope: sectionRef }
	);
	return (
		<section className="flex flex-col items-center min-h-screen space-y-12 px-14 py-16">
			<div className="container grid md:grid-cols-3 gap-8 items-center">
				<div className="md:col-start-2 gs_reveal ">
					<h2 className="font-ubuntu text-xl py-2">Skills</h2>
				</div>
			</div>
			<div ref={sectionRef} className="container flex mb-16">
				<div className="grid md:grid-cols-3 gap-6 w-full justify-center mb-16">
					<div className="md:col-start-1 gs_reveal relative max-w-80 p-6 bg-white border border-gray-200 rounded-r-3xl shadow dark:bg-gray-800 dark:border-gray-700 ">
						<h2 className="font-nanum">Ukrainian (mother tongue)</h2>
						<h2 className="font-nanum text-orange">English (advanced)</h2>
						<h2 className="font-nanum">Polish (upper-intermidiate)</h2>
						<h2 className="font-nanum">German (survivable)</h2>
						<div className="english-icon icon icon-inverse absolute top-10 -right-12">
							<img
								alt="British icon"
								src="/images/english-icon.svg"
								className="w-20 h-20"
							></img>
						</div>
					</div>

					<div className="md:col-start-2 relative gs_reveal max-w-80 p-6 bg-white border border-gray-200 rounded-b-3xl shadow dark:bg-gray-800 dark:border-gray-700">
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
						<div className="react-icon icon icon-inverse absolute -top-11 -right-11">
							<img
								alt="react icon"
								src="/images/react-icon.svg"
								className="w-24 h-24"
							></img>
						</div>
						<div className="vue-icon icon icon-follow absolute top-60 -right-10">
							<img
								alt="Vue icon"
								src="/images/vue-icon.svg"
								className="w-20 h-20"
							></img>
						</div>
					</div>
					<div className="md:col-start-3 relative gs_reveal max-w-80 p-6 bg-white border border-gray-200 rounded-l-3xl shadow dark:bg-gray-800 dark:border-gray-700">
						<h2 className="font-nanum">High commitment</h2>
						<h2 className="font-nanum">Problem-solving</h2>
						<h2 className="font-nanum">Collaboration</h2>
						<div className="collaboration-icon icon icon-follow absolute top-30 -right-10">
							<img
								alt="Collaboration icon"
								src="/images/collaboration.svg"
								className="w-20 h-20"
							></img>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="container grid md:grid-cols-2 gap-2 mb-16"></div> */}
		</section>
	);
}

export default Skills;
