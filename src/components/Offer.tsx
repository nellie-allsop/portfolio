import { Button } from "@nextui-org/react";

export default function Offer() {
	return (
		<div>
			<h2>What I can offer you</h2>
			<p>
				- Introductory talks on autism (tech-sector specific or more general)
			</p>
			<p>- Guidance on how to best support your employees</p>
			<p>
				- (NHS trusts only)Co-delivery of the Oliver McGowan Mandatory Training
				on Learning Disability and Autism programme (Tier 2) and/or the National
				Autism Trainer Programme as an autistic expert by lived experience
			</p>

			<p>
				My mission now is to educate everyone I can on autism, but particularly
				those in the tech sector. The truth is, I can&apos;t tell you exactly
				what percentage of tech sector employees are autistic, and one of the
				reasons for that is that so many of those autistic people are probably
				undiagnosed or haven&apos;t disclosed their autism diagnosis at work.
				But if I can help a handful of employees at a handful of tech
				organisations, then I&apos;ll be happy!
			</p>
			<p>Interested?</p>
			<Button
				variant="shadow"
				radius="lg"
				className="bg-gradient-to-t from-orange to-pink"
			>
				Contact me
			</Button>
		</div>
	);
}
