import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";

export const metadata: Metadata = {
	title: "EbE",
	description: "Page on Nellie's expert by experience offer",
};

export default function EbE() {
	return (
		<div className="flex flex-col items-center min-h-screen mx-64 bg-neutral-100">
			<h1 className="font-bold text-4xl text-blue p-2">Autism</h1>

			<Button
				as={Link}
				href="/"
				type="button"
				radius="sm"
				variant="shadow"
				className="bg-gradient-to-t from-orange to-pink"
			>
				Return to the main site
			</Button>
			<div>
			I am available to co-deliver training on the following programmes as an autistic expert by lived experience:
<ul className="list-disc">
<li>The National Autism Trainer Programme (Anna Freud and AT-Autism)</li>
<li>Oliver McGowan Mandatory Training on Learning Disability and Autism programme (Tier 2)</li>
</ul>

<h2 className="heading">My story</h2>

I first experienced intense and prolonged mental health difficulties while studying at University (2014-17). Obsessions and compulsions emerged, then physical shaking and mood changes. By 2018 I was engaging in risky behaviours and was treated by an intensive home treatment team. After this the concept that I might be autistic came about...
			</div>
		</div>
	);
}
