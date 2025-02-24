import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import EbEhero from "/public/EbEHero.jpg";
import Nellie from "/public/Nellie-2014.jpg";

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
				<h1 className="heading font-bold text-4xl md:text-7xl text-blue py-4">
					Autistic trainer
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
							settings, and health and justice settings
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
					<p className="py-4">
						&quot;I had the pleasure of working with Nellie to co-facilitate 3
						full days of Autism training for my colleagues. Nellie is absolutely
						fantastic to work with and I&apos;m very much looking forward to
						facilitating this training again with her later in the year! Nellie
						is a fountain of knowledge and uses her own experiences so well to
						support professionals with understanding the challenges autistic
						people face when accessing mental health services.&quot;
					</p>
					<p className="text-xl md:text-2xl pb-6">
						Jessika Morgan-McNeil,
						<Link
							className="font-bold text-pink"
							target="_blank"
							href="https://swlstg.nhs.uk/"
						>
							{" "}
							South West London and St George's Mental Health NHS Trust
						</Link>{" "}
					</p>
					<p className="py-4">
						&quot;Nellie and I co-facilitated the NATP autism course over the course of three days to a cohort of my team colleagues recently.  From the outset Nellie was extremely helpful, organised and containing in her communication with me and support in planning the roll out of the course.  I felt very supported by her both in the planning and the facilitation of the course which made it all so much smoother.  She really knew her stuff in terms of content and her calm and consistent manner throughout the course were notable.  My colleagues commented on her enthusiasm for the subject and hugely appreciated her generosity in sharing personal accounts where appropriate to increase insight and understanding.  Her delivery of the course was  just great.  I am really looking forward to working with Nellie again in the future.&quot;
					</p>
					<p className="text-xl md:text-2xl pb-6">
						Zena Paterson, Clinical Psychologist,
						<Link
							className="font-bold text-pink"
							target="_blank"
							href="https://www.dorsethealthcare.nhs.uk/"
						>
							{" "}
							Dorset HealthCare University NHS Foundation Trust
						</Link>{" "}
					</p>
					<h2 className="heading text-2xl md:text-4xl pb-4 font-bold">
						My story
					</h2>
					<Image
						src={Nellie}
						sizes="(max-width:768px) 100vw, 50vw"
						alt="A photo of Nellie from 2014"
						className="pb-4"
					></Image>
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
			</div>
		</section>
	);
}
