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
			<div>
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
