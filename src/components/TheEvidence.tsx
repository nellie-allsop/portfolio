import React from "react";
import Link from "next/link";

export default function TheEvidence() {
	return (
		<section id="evidence" className="flex flex-col pt-20 items-center h-dvh">
			<div className="flex flex-col w-full md:w-1/2 p-3 md:p-6">
				<h2 className="heading text-2xl md:text-4xl pb-6">The evidence</h2>
				<div className="text-lg md:text-2xl">
					<ul className="list-disc p-4">
						<li>
							According to the{" "}
							<Link
								className="font-bold"
								target="_blank"
								href="https://report.techtalentcharter.co.uk/diversity-in-tech#neurodiversity-in-tech"
							>
								Tech Talent Charter
							</Link>
							, 15% of UK tech workers identified as autistic when asked (out of
							a representative 500 person sample)
						</li>
						<li>
							We can have{" "}
							<Link
								className="font-bold"
								target="_blank"
								href="https://www.autism.org.uk/advice-and-guidance/topics/employment/employing-autistic-people/employers"
							>
								above-average skills
							</Link>{" "}
							when it comes to areas like memory, concentration and reliability
						</li>
						<li>
							More than 3 in 10 autistic adults have
							<Link
								className="font-bold"
								target="_blank"
								href="https://www.autistica.org.uk/our-research/research-projects/understanding-suicide-in-autism"
							>
								{" "}
								attempted suicide
							</Link>
							, and almost 8 in 10 autistic adults have a mental health
							condition (
							<Link
								className="font-bold"
								target="_blank"
								href="https://www.samaritans.org/"
							>
								click here to access the Samaritans website
							</Link>
							).
						</li>
					</ul>
				</div>
				<h2 className="heading text-2xl md:text-4xl py-6">In sum:</h2>
				<div className="text-lg md:text-2xl">
					<p>
						We are prevalent in your work force (even if you don&apos;t notice
						our differences), we may excel in certain areas and, if not
						supported, we may experience extreme distress. Here&apos;s where you
						come in...
					</p>
					<br />
				</div>
			</div>
		</section>
	);
}
