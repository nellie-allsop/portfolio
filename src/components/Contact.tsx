import React from "react";
import Link from "next/link";

export default function Contact() {
	return (
		<section
			id="contact"
			className="p-8 flex flex-col items-center h-screen pt-20 text-2xl"
		>
			<h1 className="font-bold text-7xl text-green p-2">Contact</h1>
			<p>Please feel free to contact me via :</p>
			<Link
				href="mailto:contact@nellieallsop.com"
				className="font-extrabold text-pink"
			>
				📨contact@nellieallsop.com
			</Link>
			<Link
				href="https://www.linkedin.com/in/nellie-allsop/"
				className="font-extrabold text-pink"
			>
				👋www.linkedin.com/in/nellie-allsop/
			</Link>
		</section>
	);
}
