import React from "react"
import Link from "next/link";

export default function Header() {
	return (
		<div className="bg-green text-white flex flex-col">
			<nav className="flex justify-around m-4 text-2xl">
<Link href="/">Home</Link>
			</nav>
		</div>
	);
}
