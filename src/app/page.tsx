"use client";

import Hero from "@/components/Hero";
import WhatYouCanDo from "@/components/WhatYouCanDo";
import Contact from "@/components/Contact";
import TheEvidence from "@/components/TheEvidence";
import AboutNellie from "@/components/AboutNellie";
import Header from "@/components/Header";

export default function Home() {
	return (
		<main>
			<div className="flex flex-col gap-y-8 md:gap-y-12">
				<Header />
				<Hero />
				<TheEvidence />
				<WhatYouCanDo />
				<AboutNellie />
				<Contact />
			</div>
		</main>
	);
}
