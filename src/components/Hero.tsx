import React from "react";
import Image from "next/image";
import hero from "/public/Hero.jpg";
import Link from "next/link";
import { Button } from "@nextui-org/react";

export default function Hero() {
	return (
		<section id="hero" className="flex h-screen">
			<Image
				className="ml-0 rounded-r-full float-left "
				src={hero}
				alt="A photo of Nellie"
				style={{ maxWidth: "50%", height: "auto" }}
			></Image>

			<div id="hero-text" className="flex flex-col">
				<h1 className="heading mt-44 text-9xl text-orange font-bold">
					Autism.
				</h1>
				<h2 className="heading text-4xl">Where do I start?!</h2>
				<p>
					Hi there! I&apos;m Nellie and I&apos;m autistic 👋 My goal is to guide
					you and your colleagues as you start to better understand autism.
					Starting to learn about a new area can feel daunting, but I can show
					you why learning about autism is a need for your organisation, not a
					want. Interested?
				</p>
				<Button
				as={Link}
				href="/ebe"
				color="primary"
				type="button"
				radius="sm"
				>
				For NHS and health and social care staff
				</Button>
			</div>
		</section>
	);
}
