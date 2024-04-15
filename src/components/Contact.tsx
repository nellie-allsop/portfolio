import React from "react";
import Link from "next/link";

export default function Contact() {
	return (
		<div className="p-8 flex flex-col items-center">
			<h1 className="font-bold text-4xl text-green p-2">Contact me</h1>
			<p>
				Please feel free to email me on
				<Link
					href="mailto:contact@nellieallsop.com"
					className="font-extrabold text-pink"
				>
					contact@nellieallsop.com
				</Link>
				to discuss how I can best help you and your organisation.
			</p>
		</div>
	);
}
