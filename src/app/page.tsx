import Hero from "@/components/Hero";
import WhatYouCanDo from "@/components/WhatYouCanDo";
import Contact from "@/components/Contact";
import TheEvidence from "@/components/TheEvidence";
import AboutNellie from "@/components/AboutNellie";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<div>
				<Hero />
				<TheEvidence />

				<WhatYouCanDo />
				<AboutNellie />
				<Contact />
			</div>
		</main>
	);
}
