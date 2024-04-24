import React from "react";
import Image from "next/image";
import hero from "/public/Hero.jpg";

export default function Hero() {
	return (
		<section id="hero" className="flex">
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
					Hi there, I&apos;m Nellie. I&apos;ve been autistic my entire life, I
					just didn&apos;t know it until 2020. I can help you to learn more
					about people like me.
				</p>
			</div>
		</section>
	);
}
