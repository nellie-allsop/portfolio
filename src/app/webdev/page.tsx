import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Coding",
	description: "Nellie's coding portfolio",
};

export default function About() {
	return (
		<div className="p-8 flex flex-col items-center min-h-screen">
			<h1 className="font-bold text-4xl text-purple-500">Coding</h1>
		</div>
	);
}
