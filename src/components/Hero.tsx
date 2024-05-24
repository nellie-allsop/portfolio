import React from "react";
import Image from "next/image";
import hero from "/public/Hero.jpg";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import arrow from "/public/arrow.svg";

export default function Hero() {
	return (
		<section id="hero" className="flex h-screen pt-20">
			<Image
				className=" rounded-r-full"
				src={hero}
				sizes="100vw"
				alt="A photo of Nellie"
				style={{ width: "50%", height: "auto" }}
			></Image>
			<div className="flex flex-col">
				<div className="flex justify-end p-4">
					<Button
						id="blueButton"
						as={Link}
						href="/ebe"
						color="primary"
						type="button"
						radius="full"
						size="lg"
					>
						<p className="text-l">For NHS and health and social care staff</p>
					</Button>
				</div>
				<div id="hero-text" className="flex flex-col p-6">
					<h1 className="heading text-9xl text-orange font-bold">
						Autism.
					</h1>
					<h2 className="heading text-4xl">Where do I start?!</h2>
					<div className="text-xl">
					<p>
						Hi there, I&apos;m Nellie and I&apos;m autistic 👋 My goal is to
						guide you and your colleagues as you start to better understand
						autism. Starting to learn about a new area can feel daunting, but I
						can show you why learning about autism is a
						<span className="font-bold"> need </span>
						for your organisation, not a want.
					</p>
					<br></br>
					<p>Interested?</p>

					<Link href="#evidence">
						<Image
							id="arrow"
							src={arrow}
							alt="arrow icon"
							width={40}
							height={40}
						></Image>
					</Link>
				</div>
				</div>
			</div>
		</section>
	);
}
