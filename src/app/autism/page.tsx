import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Autism",
	description: "Pages on Nellie's work around autism",
};

export default function About() {
	return (
		<div className="flex flex-col items-center min-h-screen relative w-screen">
			<div className="flex justify-center items-center h-[250px] bg-blue w-[730.6px]">
				<h1 className="text-cream text-8xl text-center ">Autism</h1>
			</div>
			<Image
				className="object-cover opacity-25"
				src="/autism.svg"
				alt="Nellie posing for photographs while wearing a National Autistic Society t-shirt and holding a campaigns placard"
				layout="fill"
			></Image>
			<section>
				<p>
					I&apos;ve been autistic as long as I&apos;ve existed,but I was diagnosed as having Autism Spectrum Disorder (ASD) at the age of 25 through the Lorna Wing Centre
				</p>
				{/* <a href="www.autism.org.uk/what-we-do/autism-training-and-best-practice/diagnostic-services>Lorna Wing Centre</a> */}
			</section>
		</div>
	);
}
