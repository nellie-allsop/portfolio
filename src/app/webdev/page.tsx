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
			<h1 className="font-bold text-4xl text-red p-2">Coding</h1>
			<h2 className="p-2 text-2xl">Projects so far:</h2>
			<div className="grid grid-cols-2 grid-rows-2 gap-10 h-200 w-400">
				<div className="col-span-1 row-span-1 h-2000 w-300">
					<h3>DnD Companion</h3>
					<DnDVideo />
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
