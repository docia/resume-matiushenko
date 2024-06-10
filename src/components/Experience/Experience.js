function Career() {
	return (
		<section className="flex flex-col items-center  min-h-screen">
			<div className="relative">
				<div className="absolute inset-0">
					<div className="container grid md:grid-cols-3 gap-8 items-center h-full">
						<div className="md:col-start-2 h-full pt-16 ml-2">
							<div className="w-0.5 bg-gray-300 h-full"></div>
						</div>
					</div>
				</div>
				<div className="container grid md:grid-cols-3 gap-8 items-center mb-4">
					<div className="md:col-start-2">
						<h2 className="font-ubuntu text-xl py-2">Experience</h2>
					</div>
				</div>
				<div className="container grid md:grid-cols-3 gap-4 md:gap-8 mb-16">
					<div className="pl-12 md:pl-0 md:text-right md:leading-loose uppercase text-gray-500">
						Present - November 2020
					</div>
					<div className="pl-12 md:col-span-2 relative">
						<div className="rounded-full bg-white border-2 border-gray-300 w-5 h-5 absolute mt-1.5 -ml-12"></div>
						<h3 className="font-bold text-lg">
							Senior Customer Manager @ Yellow Stone (full-time)
						</h3>
						<p className="text-sm text-gray-500">Dnipro, Ukraine</p>
						<ul className="mt-6 list-disc">
							<li>Working with Atlassian software </li>
							<li>Handling chats, emails, and calls</li>
							<li>
								Redirecting complex technical and financial queries to relevant
								departments and providing feedback to customers
							</li>
							<li>Resolving controversial and conflict situations </li>
						</ul>
					</div>
				</div>
				<div className="container grid md:grid-cols-3 gap-4 md:gap-8 mb-16">
					<div className="pl-12 md:pl-0 md:text-right md:leading-loose uppercase text-gray-500">
						October 2022 - April 2022
					</div>
					<div className="pl-12 md:col-span-2 relative">
						<div className="rounded-full bg-white border-2 border-gray-300 w-5 h-5 absolute mt-1.5 -ml-12"></div>
						<h3 className="font-bold text-lg">
							Student Assistant @ University of Kassel (part-time)
						</h3>
						<p className="text-sm text-gray-500">Kassel, Germany</p>
						<ul className="mt-6 list-disc">
							<li>
								Assisted participants of the German course for Ukrainian and
								foreign refugees
							</li>
							<li>
								Provided consultations on university enrollment and visa
								applications
							</li>
							<li>Edited and managed Moodle courses for students</li>
							<li>Organized charity events</li>
						</ul>
					</div>
				</div>
				<div className="container grid md:grid-cols-3 gap-4 md:gap-8 mb-16">
					<div className="pl-12 md:pl-0 md:text-right md:leading-loose uppercase text-gray-500">
						July 2020 - December 2019
					</div>
					<div className="pl-12 md:col-span-2 relative">
						<div className="rounded-full bg-white border-2 border-gray-300 w-5 h-5 absolute mt-1.5 -ml-12"></div>
						<h3 className="font-bold text-lg">
							Polish Customer Care Specialist @ CCIG (part-time)
						</h3>
						<p className="text-sm text-gray-500">Kielce, Poland</p>
						<ul className="mt-6 list-disc">
							<li>Conducted cold and warm calls to clients</li>
							<li>
								Proposed tariffs, services, and products to existing customers
							</li>
							<li>Sold equipment via phone (full cost and installments)</li>
							<li>Updated customer and sales information in the database</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Career;
