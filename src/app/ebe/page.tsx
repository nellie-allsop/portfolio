import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import EbEhero from "/public/EbEHero.jpg";

export const metadata: Metadata = {
	title: "EbE",
	description: "Page on Nellie's expert by experience offer",
};

export default function EbE() {
	return (
		<section id="ebe" className="flex flex-col items-center bg-neutral-100">
			<div className="flex flex-col items-center w-full md:w-1/2 p-3 md:p-6">
				<Image
					className="w-full h-1/2 max-h-430px"
					src={EbEhero}
					sizes="(max-width:728px) 100vw, 50vw"
					alt="Two autistic friends sitting outside using stim toys and laughing at their phones"
				></Image>
				<h1 className="heading font-bold text-4xl md:text-7xl text-blue">
					Autism
				</h1>

				<div className="flex flex-col items-center text-lg md:text-2xl">
					I am qualified and available to co-deliver training on the following
					programmes as an autistic expert by lived experience:
					<ul className="list-disc p-4">
						<li>
							<Link
								className="font-bold"
								target="_blank"
								href="https://www.annafreud.org/training/health-and-social-care/national-autism-trainer-programme/"
							>
								The National Autism Trainer Programme
							</Link>{" "}
							(Anna Freud and AT-Autism) - Adult community mental health
							settings
						</li>
						<li>
							<Link
								className="font-bold"
								target="_blank"
								href="https://www.hee.nhs.uk/our-work/learning-disability/current-projects/oliver-mcgowan-mandatory-training-learning-disability-autism"
							>
								Oliver McGowan Mandatory Training on Learning Disability and
								Autism programme
							</Link>{" "}
							(Tier 2)
						</li>
					</ul>
					<h2 className="heading text-2xl md:text-4xl pb-6">My story</h2>
					<p>
						I first experienced intense and prolonged mental health difficulties
						whilst studying at University (2014-17). Obsessions and compulsions
						emerged, then physical shaking and mood changes. By 2018 I was
						engaging in risky behaviour and was treated by an intensive home
						treatment team, before being discharged to an adult community mental
						health team. After this the concept that I might be autistic came
						about...{" "}
					</p>
					<div className="p-4">
						<Button
							as={Link}
							href="/"
							type="button"
							radius="sm"
							variant="shadow"
							className="bg-gradient-to-t from-orange to-pink text-white"
						>
							Return to the main site
						</Button>
					</div>
				</div>
				<p>
					Photo and alt text by{" "}
					<a href="https://unsplash.com/@hikiapp?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
						Hiki App
					</a>{" "}
					on{" "}
					<a href="https://unsplash.com/photos/two-autistic-friends-sitting-outside-using-stim-toys-and-laughing-at-their-phones-aM-BRQtrng8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
						Unsplash
					</a>
				</p>
			</div>
		</section>
	);
}
