import React from "react";
import Link from "next/link";

export default function Contact() {
	return (
		<section
			
			className="flex flex-col items-center h-dvh"
		>
					<div className ="absolute -mt-20"
			id="contact"/>
			<div className="flex flex-col items-center w-full md:w-1/2 p-3 md:p-6">
				<h2 className="heading text-3xl md:text-7xl pb-6">Contact</h2>
				<div className="text-2xl md:text-4xl">
					<p>Please feel free to contact me via :</p>
					<Link
						href="mailto:contact@nellieallsop.com"
						className="font-extrabold text-pink"
					>
						📨contact@nellieallsop.com
					</Link>
				</div>
			</div>
		</section>
	);
}
