import { Metadata } from "next";
import React from "react";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Autism",
	description: "Pages on Nellie's work around autism",
};

export default function About() {
	return (
		<div className="flex flex-col items-center min-h-screen">
			<div className="w-full">
				{/* <Image className="object-cover"
					src="/autism.svg"
					alt="Nellie posing for photographs while wearing a National Autistic Society t-shirt and holding a campaigns placard"
					height={500}
					width={1000}
					
				></Image> */}
			</div>
			<h1 className="font-bold text-4xl text-purple-500">Autism</h1>
		</div>
	);
}
