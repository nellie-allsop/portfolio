import { Metadata } from "next";
import React from "react";
import DnDVideo from "@/components/DnDVideo";
import CrochogVideo from "@/components/CrochogVideo" 
import PantryPetVideo from "@/components/PantryPetVideo" 

export const metadata: Metadata = {
	title: "Coding",
	description: "Nellie's coding portfolio",
};

export default function About() {
	return (
		<div className="p-8 flex flex-col items-center min-h-screen">
			<h1 className="font-bold text-4xl text-green p-2">Coding</h1>
			<h2 className="p-2 text-2xl">Below are a selection of projects I&apos;ve created so far, both in groups and as a solo endeavour. To see how each site works, hover over the corresponding image.</h2>
			<div className="grid grid-cols-2 grid-rows-2 gap-10 h-200 w-400">
				<div className="col-span-1 row-span-1 h-2000 w-300">
					<h3>DnD Companion</h3>
					<DnDVideo />
					<p>Objective: Create a companion app for Dungeons and Dragons players of all experience levels.</p>
					<p>Solution: Worked alongside three fellow developers to create a mobile first, progressive web app</p>
					<p>Utilised: MongoDB, Express, React, Node.js, Auth0, Trello, Git hub, Vercel</p>
					<p>Goals met by: pair and mob programming, daily stand ups and working in an agile manner</p>
				</div>

				<div>
					<h3>crochog</h3>
					<CrochogVideo />
					<p>Objective: Create a functional blog site with a commenting feature, a sort future and a selection of blog posts</p>
					<p>Solution: Create a Next.js blog site based on the topic of crochet </p>
					<p>Utilised: Next.js, Typescript, Tailwind.css</p>
					<p>Goals met by: asking for help from peers and tutor when needed, utilising prior knowledge and techniques gained in prior days of Next.js course</p>
				</div>

				<div className="row-start-2">
					<h3>PantryPet</h3>
					<PantryPetVideo />
					<p>Objective: Produce a site where users can store a list of the food items in their house, as well as a section where they can see which recipes they can cook based on those ingredients. The site needed to accept and process user input, utilise local storage and use domain models.</p>
					<p>Solution: Work alongside two other developers to create a functional pantry section and recipe section, as well as an about us page.</p>
					<p>Utilised: HTML, CSS, JavaScript, GitHub pages, Google font</p>
					<p>Goals met by: working as a team and reugularly communicating with each other both in person and virtually</p>
				</div>
			</div>

			<h2 className="p-8 text-2xl">What I would like to build next:</h2>
			<ul>
				<li>- A crochet pattern builder</li>
				<li>- A Guess that vine quiz</li>
			</ul>
		</div>
	);
}
