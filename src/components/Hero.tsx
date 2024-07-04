import React from "react";
import Image from "next/image";
import hero from "/public/Hero.jpg";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import arrow from "/public/arrow.svg";

export default function Hero() {
	return (
		<section id="hero" className="flex h-dvh pt-20">
			<div className="w-full md:w-1/2">
			<Image
				className="rounded-r-full object-cover w-full h-full"
				src={hero}
				sizes="(max-width:768px) 100vw, 50vw"
				alt="A photo of Nellie"
				
			></Image>
			</div>
			<div className="flex flex-col w-full md:w-1/2 p-6 md:p-12">
				<div className="flex justify-end p-4 md:p-0">
					<Button
						id="blueButton"
						as={Link}
						href="/ebe"
						color="primary"
						type="button"
						radius="full"
						size="lg"
						variant="shadow"
					>
						<p className="text-l">For NHS and health and social care staff</p>
					</Button>
				</div>
				<div id="hero-text" className="flex flex-col mt-4 md:mt-12">
					<h1 className="heading text-4xl md:text-9xl text-orange font-bold">Autism.</h1>
					<h2 className="heading text-2xl md:text-4xl pb-6">Where do I start?!</h2>
					<div className="text-lg md:text-2xl">
						<p>
							Hi there, I&apos;m Nellie and I&apos;m autistic 👋 My goal is to
							guide you and your colleagues as you start to better understand
							autism. Starting to learn about a new area can feel daunting, but
							I can show you why learning about autism is a
							<span className="font-bold"> need </span>
							for your organisation, not a want.
						</p>
						<br />
						<p>Interested?</p>

						<Link href="#evidence">
							<Image className="animate-pulse"
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
