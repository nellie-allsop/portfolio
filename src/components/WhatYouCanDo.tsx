import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function WhatYouCanDo() {
	return (
		<section
			className="flex flex-col h-dvh items-center"
		>
					<div className ="absolute -mt-20"
			id="what-you-can-do"/>
			<div className="flex flex-col w-full md:w-1/2 p-3 md:p-6">
				<h2 className="heading text-2xl md:text-4xl pb-6">What you can do</h2>
				<div className="text-lg md:text-2xl">
					<ul className="list-disc p-4">
						<li>Take the first steps towards learning about autism</li>
						<li>Improve on your organisation&apos;s understanding of autism</li>
						<li>
							Plan and action achievable changes to how your organisation works
							(that will likely benefit all employees, but especially those that
							are autistic)
						</li>
					</ul>
					<p className="py-4">
						I can help your organisation with any (or all) of the above. To find
						out more:
					</p>
					<div id="cta-buttons" className="flex justify-center pb-4">
						<div className="pr-2">
							<Button
								as={Link}
								href="mailto:contact@nellieallsop.com"
								type="button"
								radius="sm"
								variant="shadow"
								className="bg-gradient-to-t from-orange to-pink text-white"
							>
								Email me
							</Button>
						</div>
						<div className="pl-2">
							<Button
								as={Link}
								href="https://calendly.com/nellieallsop"
								type="button"
								radius="sm"
								variant="shadow"
								className="bg-gradient-to-t from-orange to-pink text-white"
								target="blank"
							>
								Book a chat
							</Button>
						</div>
					</div>
					<h2 className="heading text-2xl md:text-4xl pb-6">Not convinced?</h2>
					<p>
						&quot;Working with Nellie has been impactful at an organisational,
						and individual level. It has allowed us to review our approach and
						understanding of what inclusivity means, making relevant reasonable
						adjustments that support and enable all members of our community.
						Nellie is an extremely competent speaker and facilitator, able to
						adapt the conversation at relevant levels within the organisation
						and to varied audiences.&quot;
					</p>
					<p className="text-xl md:text-2xl p-4 pb-10">
						James Adams, Founder and CEO,
						<Link
							className="font-bold text-pink"
							target="_blank"
							href="https://techeducators.co.uk/"
						>
							{" "}
							Tech Educators
						</Link>
					</p>
					<p>
						&quot;I collaborated with Nellie recently on a talk for the codebar
						community about autism. She is a great speaker, her ability to
						engage and connect with the audience was amazing. Her authenticity
						and enthusiasm make her talk incredibly impactful and memorable. I
						highly recommend her for any speaking or collaboration
						opportunities.&quot;
					</p>
					<p className="text-xl md:text-2xl p-4">
						Kimberley Cook,
						<Link
							className="font-bold text-pink"
							target="_blank"
							href="https://codebar.io/"
						>
							{" "}
							codebar
						</Link>{" "}
						Director
					</p>
				</div>
			</div>
		</section>
	);
}
