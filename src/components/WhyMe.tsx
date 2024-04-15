import React from "react";
import DnDVideo from "@/components/DnDVideo";
import CrochogVideo from "@/components/CrochogVideo";
import PantryPetVideo from "@/components/PantryPetVideo";

export default function WhyMe() {
	return (
		<div className="p-8 flex flex-col items-center">
			<h1 className="font-bold text-4xl p-2">Why work with me?</h1>
			<h2 className="p-2">
				I took the plunge into working as a sole trader in January 2024, having
				built up several years&apos; experience in public speaking. I&apos;m not afraid to
				try new things. Take my journey into tech as an example. I left my job,
				I joined two coding bootcamps and gained an insight into the tech sector
				that I&apos;m now harnessing in my own unique way.Below are a selection of
				projects I&apos;ve created so far, either in groups and as a solo
				endeavour. To see how each site works, hover over the corresponding
				image.
			</h2>
			<div className="grid grid-cols-2 grid-rows-1 gap-10 h-100 w-400">
				<div className="col-span-1 row-span-1 h-200 w-300">
					<h3>DnD Companion</h3>
					<DnDVideo />
					<p>
						A companion app for Dungeons and Dragons players of all experience
						levels.
					</p>
				</div>

				<div>
					<h3>crochog</h3>
					<CrochogVideo />

					<p>A Next.js blog site with commenting and sorting features</p>
				</div>

				<div className="row-start-2">
					<h3>PantryPet</h3>
					<PantryPetVideo />
					<p>A helpful pantry and recipe site</p>
				</div>
			</div>
		</div>
	);
}
