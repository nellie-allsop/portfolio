import { Metadata } from "next";
import React from "react";
import Video from "@/components/Video";

export const metadata: Metadata = {
	title: "Coding",
	description: "Nellie's coding portfolio",
};

export default function About() {
	return (
		<div className="p-8 flex flex-col items-center min-h-screen">
			<h1 className="font-bold text-4xl text-red p-2">Coding</h1>
			<h2 className="p-2 text-2xl">Projects so far:</h2>
			<div className="grid grid-cols-2 grid-rows-2 gap-10">
				<div>
					<h3>DnD Companion</h3>
					<Video />
				</div>

				<div>
					<h3>crochog</h3>
					<Video />
				</div>

				<div className="row-start-2">
					<h3>PantryPet</h3>
					<Video />
				</div>

				<div className="row-start-2">
					<h3>Whack a bug</h3>
					<Video />
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
