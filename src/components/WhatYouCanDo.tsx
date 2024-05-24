import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function WhatYouCanDo() {
	return (
		<section id="what-you-can-do" className="flex flex-col h-screen pt-20 m-20">
			<h2>What you can do</h2>
			<div className="text-xl">
			<ul className="list-disc">
				<li>Take the first steps towards learning about autism</li>
				<li>Improve on your organisation&apos;s understanding of autism</li>
				<li>
					Plan and action achievable changes to how your organisation works
					(that will likely benefit all employees, but especially those that are
					autistic)
				</li>
			</ul>
			<p>
				I can help your organisation with any (or all) of the above. To find out
				more:
			</p>
			<Button
				as={Link}
				href="mailto:contact@nellieallsop.com"
				type="button"
				radius="sm"
				variant="shadow"
				className="bg-gradient-to-t from-orange to-pink"
			>
				Email me
			</Button>
			<Button
				as={Link}
				href="https://calendly.com/nellieallsop"
				type="button"
				radius="sm"
				variant="shadow"
				className="bg-gradient-to-t from-orange to-pink"
				target="blank"
			>
				Book a chat
			</Button>
			<h2>Not convinced?</h2>
			<p>
				&quot;Working with Nellie has been impactful at an organisational, and
				individual level. It has allowed us to review our approach and
				understanding of what inclusivity means, making relevant reasonable
				adjustments that support and enable all members of our community. Nellie
				is an extremely competent speaker and facilitator, able to adapt the
				conversation at relevant levels within the organisation and to varied
				audiences.&quot;
			</p>
			<h3 className="text-xl p-4 font-extrabold  ">
				James Adams, Founder and CEO, Tech Educators
			</h3>
			</div>
		</section>
	);
}
