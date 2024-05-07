import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "/public/Logo.svg";

export default function Header() {
	const [header, setHeader] = useState(false);
	return (
		<div>
			<nav className="w-full text-black bg-white flex text-2xl flex-col fixed z-20 py-4">
				<div className="px-3 mx-auto lg:max-w-6x1 justify-between md:items-center md:flex md:px-6">
					<div>
						<div className="flex justify-between items-center md:block">
							{/* SVG logo */}
							<Link href="/" onClick={() => setHeader(!header)}>
								<Image
									src={logo}
									alt="The site logo. It is a circle with a gradient of colours in it, from orange through to pink then blue."
									width={40}
									height={40}
								></Image>
							</Link>

							{/* Hamburger section */}
							<div className="md:hidden">
								<button onClick={() => setHeader(!header)}>
									{header ? (
										<Image
											src="./Close.svg"
											width={40}
											height={40}
											alt="close"
										/>
									) : (
										<Image
											src="./Hamburger.svg"
											width={40}
											height={40}
											alt="menu"
										/>
									)}
								</button>
							</div>
						</div>
					</div>

					<div>
						<div
							className={`flex-1 justify-self-center   md:block ${
								header ? " md:p-1 block" : "hidden"
							}`}
						>
							<ul className="h-screen md:h-8 justify-center items-center md:flex">
								<li className="md:p-5">
									<Link href="/" onClick={() => setHeader(!header)}>
										Home
									</Link>
								</li>
								<li className="md:p-5">
									{" "}
									<Link href="#evidence" onClick={() => setHeader(!header)}>
										The evidence
									</Link>
								</li>
								<li className="md:p-5">
									<Link href="#what-you-can-do" onClick={() => setHeader(!header)}>
										What you can do
									</Link>
								</li>
								<li className="md:p-5">
									{" "}
									<Link href="#about-nellie" onClick={() => setHeader(!header)}>
										About Nellie
									</Link>
								</li>
								<li className="md:p-5">
									{" "}
									<Link href="#contact" onClick={() => setHeader(!header)}>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
