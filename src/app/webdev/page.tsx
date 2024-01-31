import { Metadata } from "next";
import React from "react";
import Video from "@/components/Video"

export const metadata: Metadata = {
	title: "Coding",
	description: "Nellie's coding portfolio",
};

export default function About() {
	return (
		<div className="p-8 flex flex-col items-center min-h-screen">
			<h1 className="font-bold text-4xl text-purple-500">Coding</h1>
			<br />
			<p>Projects so far:</p>
			<ul>
				<li>DnD Companion</li>
				<Video />
				<li>crochog</li>
				<li>PantryPet</li>
				<li>Whack a bug</li>
			</ul>
			<p>What I would like to build next:</p>
			<ul>
				<li>A crochet pattern builder</li>
				<li>A Guess that vine quiz</li>
			</ul>

		</div>
	);
}
