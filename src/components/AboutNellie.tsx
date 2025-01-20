import React from "react";
import Link from "next/link";
import Image from "next/image";
import speaking from "/public/roots-to-business-photo.jpg";
import badge from "/public/ambassador.png"

export default function AboutNellie() {
	return (
		<section
			className="flex flex-col h-dvh items-center"
		>
			<div className ="absolute -mt-20"
			id="about-nellie"/>
			<div className="flex flex-col w-full md:w-1/2 p-3 md:p-6">
				<h2 className="heading text-2xl md:text-4xl">About Nellie</h2>
				<Image
					className="rounded-r-full pt-6"
					src={speaking}
					sizes="(max-width:768px) 100vw, 50vw"
					alt="A photo of Nellie holding a microphone and speaking as part of a panel of young professionals"
				></Image>
				<Link
					className="font-bold text-right pb-4"
					target="_blank"
					href="https://www.linkedin.com/in/robdodsworthphotography/"
				>
					📷 Rob Dodsworth
				</Link>{" "}
				<div className="text-lg md:text-2xl">
					<p>
						Prior to becoming self employed, I spent several years working at
						one of the UK&apos;s leading autism charities, where I spoke
						publicly on autism and supported autistic volunteers. Thanks to the
						charity, I was able to take part in media training, speak at an NHS
						Confed Expo and receive my autism diagnosis.
					</p>
					<br />
					<div className="flex items-center flex-col md:grid md:grid-cols-1 md:items-stretch">
						<div>
							<p className="pb-4">
								After leaving that role in 2023, I took a leap into the tech
								sector and experienced first hand the levels of understanding of
								autism in the sector, as well as what it&apos;s like to be an
								autistic adult learner on an intensive coding bootcamp.
								<br />
								<br />I continue to remain immersed in current work around
								autism in society, while also working on my coding skills
								(slowly but surely!)
							</p>
						</div>
						{/* <iframe
							title="Video of Nellie speaking about what they gained from being on a full stack development course with the organisation Tech Educators"
							sandbox="allow-scripts"
							className="pl-2"
							width="315"
							height="560"
							src="https://www.youtube-nocookie.com/embed/ptWYJ9gBCt4?mute=1"
						/> */}
						<h2 className="heading text-2xl md:text-4xl pb-6 col-span-2 pt-4">
							Current voluntary roles
						</h2>
						<ul className="list-disc col-span-2 p-4">
							<li>
								<Link
									className="font-bold"
									target="_blank"
									href="https://www.autism.org.uk"
								>
									National Autistic Society
								</Link>{" "}
								autism insight panel member
							</li>
							<li>
								Student and coach at the charity
								<Link
									className="font-bold"
									target="_blank"
									href="https://codebar.io/"
								>
									{" "}
									codebar
								</Link>
							</li>
							<li>
								Community Advisory panel member for the
								<Link
									className="font-bold"
									target="_blank"
									href="https://www.autismcentreofexcellence.org/"
								>
									{" "}
									Autism Centre of Excellence Cambridge
								</Link>
							</li>
							{/* <li>
								Volunteer developer @
								<Link
									className="font-bold"
									target="_blank"
									href="https://pensano.dev"
								>
									{" "}
									pensano.dev
								</Link>
							</li> */}
							<li>
								<Link
									className="font-bold"
									target="_blank"
									href="https://noteforms.com/notion-ambassadors-influencers"
								>
									{" "}
									Notion Ambassador
								</Link>
							</li>
						</ul>
						<Image
					src={badge}
					// sizes="(max-width:768px) 100vw, 50vw"
					alt="A Notion ambassador badge"
				></Image>
					</div>
				</div>
			</div>
		</section>
	);
}
