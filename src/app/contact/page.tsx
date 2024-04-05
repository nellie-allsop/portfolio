import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Contact",
	description: "A place to find contact details for Nellie",
};

export default function About() {
	return (
		<div className="p-8 flex flex-col items-center min-h-screen">
			<h1 className="font-bold text-4xl text-green p-2">Contact me</h1>
<p>Please feel free to email me on contact@nellieallsop.com to discuss how I can best help you and your organisation.</p>
		</div>
	);
}
