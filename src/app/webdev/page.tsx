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
					{/* <p>Utilised: Javascript, React, MongoDB, HTML, CSS, Node.js, Express.js, Trello, Git hub, Vercel</p> */}
					<p>Goals met by: pair and mob programming, daily stand ups</p>
				</div>

				<div>
					<h3>crochog</h3>
					<CrochogVideo />
				</div>

				<div className="row-start-2">
					<h3>PantryPet</h3>
					<PantryPetVideo />
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
