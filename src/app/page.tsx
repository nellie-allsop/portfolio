import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-6">
			<h1 className="text-3xl text-blue m-8">
				Hello👋
				<br></br>
				This site is currently under construction 🏗️
				<br></br>
				If you&apos;d like to contact me 🗣️
				<br></br>
				Please email ✉️ contact@nellieallsop.com
				<br></br>
				Site relaunch ➡️ 22/04/24
			</h1>
			{/* <section className="2xl">Hello!</section> */}
			{/* 
			<div>
				<Image
					className="m-8"
					src="/Helper.jpg"
					alt="A photo of Nellie"
					height={400}
					width={387}
				></Image>
				<Button
					variant="shadow"
					radius="lg"
					className="bg-gradient-to-t from-turq to-pink"
				>
					Tester
				</Button>
			</div> */}

			{/* <div
				className="
				flex m-8
				"
			> */}
			{/* Cloud one autism */}
			{/* <div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="442.33"
						zoomAndPan="magnify"
						viewBox="249 199 270 442.33"
						height="240.23"
						preserveAspectRatio="xMidYMid meet"
						version="1.0"
					>
						<defs>
							<clipPath id="2da454452f">
								<path
									d="M 46.707031 210.164062 L 762.957031 210.164062 L 762.957031 600 L 46.707031 600 Z M 46.707031 210.164062 "
									clip-rule="nonzero"
								/>
							</clipPath>
						</defs>

						<Link href="/autism">
							<g clip-path="url(#2da454452f)">
								<path
									fill="#94e1f9"
									className="cloud"
									d="M 667.359375 407.675781 C 666.292969 407.675781 665.238281 407.722656 664.179688 407.757812 C 664.226562 406.535156 664.273438 405.316406 664.273438 404.082031 C 664.273438 351.953125 622.015625 309.695312 569.890625 309.695312 C 557.917969 309.695312 546.472656 311.949219 535.9375 316.015625 C 509.617188 253.945312 448.121094 210.40625 376.457031 210.40625 C 314.609375 210.40625 260.371094 242.859375 229.746094 291.636719 C 218.753906 288.578125 207.1875 286.910156 195.222656 286.910156 C 124.269531 286.910156 66.746094 344.429688 66.746094 415.382812 C 66.746094 429.460938 69.046875 442.992188 73.230469 455.671875 C 56.921875 470.839844 46.707031 492.472656 46.707031 516.503906 C 46.707031 559.164062 78.871094 594.300781 120.265625 599.019531 L 120.3125 599.582031 L 121.820312 599.296875 L 123.179688 599.296875 C 125.363281 599.464844 127.558594 599.582031 129.785156 599.582031 C 132.007812 599.582031 134.207031 599.464844 136.386719 599.296875 L 661.027344 599.296875 C 663.121094 599.429688 665.230469 599.527344 667.359375 599.527344 C 720.339844 599.527344 763.285156 556.578125 763.285156 503.601562 C 763.285156 450.625 720.339844 407.675781 667.359375 407.675781 Z M 667.359375 407.675781 "
									fill-opacity="1"
									fill-rule="nonzero"
								/>
								<text
									id="autism"
									x="400"
									y="500"
									fontSize="150"
									textAnchor="middle"
									fill="pink"
								>
									Autism
								</text>
							</g>
						</Link>
					</svg>
				</div> */}
			{/* Cloud two coding */}
			{/* <div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="442.33"
						zoomAndPan="magnify"
						viewBox="249 199 270 442.33"
						height="240.23"
						preserveAspectRatio="xMidYMid meet"
						version="1.0"
					>
						<defs>
							<clipPath id="2da454452f">
								<path
									d="M 46.707031 210.164062 L 762.957031 210.164062 L 762.957031 600 L 46.707031 600 Z M 46.707031 210.164062 "
									clip-rule="nonzero"
								/>
							</clipPath>
						</defs>
						<Link className="m-8" href="/webdev">
							<g clip-path="url(#2da454452f)">
								<path
									fill="#94e1f9"
									className="cloud"
									d="M 667.359375 407.675781 C 666.292969 407.675781 665.238281 407.722656 664.179688 407.757812 C 664.226562 406.535156 664.273438 405.316406 664.273438 404.082031 C 664.273438 351.953125 622.015625 309.695312 569.890625 309.695312 C 557.917969 309.695312 546.472656 311.949219 535.9375 316.015625 C 509.617188 253.945312 448.121094 210.40625 376.457031 210.40625 C 314.609375 210.40625 260.371094 242.859375 229.746094 291.636719 C 218.753906 288.578125 207.1875 286.910156 195.222656 286.910156 C 124.269531 286.910156 66.746094 344.429688 66.746094 415.382812 C 66.746094 429.460938 69.046875 442.992188 73.230469 455.671875 C 56.921875 470.839844 46.707031 492.472656 46.707031 516.503906 C 46.707031 559.164062 78.871094 594.300781 120.265625 599.019531 L 120.3125 599.582031 L 121.820312 599.296875 L 123.179688 599.296875 C 125.363281 599.464844 127.558594 599.582031 129.785156 599.582031 C 132.007812 599.582031 134.207031 599.464844 136.386719 599.296875 L 661.027344 599.296875 C 663.121094 599.429688 665.230469 599.527344 667.359375 599.527344 C 720.339844 599.527344 763.285156 556.578125 763.285156 503.601562 C 763.285156 450.625 720.339844 407.675781 667.359375 407.675781 Z M 667.359375 407.675781 "
									fill-opacity="1"
									fill-rule="nonzero"
								/>
								<text
									x="400"
									y="500"
									fontSize="150"
									textAnchor="middle"
									fill="yellow"
								>
									Coding
								</text>
							</g>
						</Link>
					</svg>
				</div>
			</div>
			<section>
				<h2>Current voluntary roles</h2> */}

			{/* <ul>
					<li>Volunteer developer with Pensano Developers</li>
					<li>National Autistic Society autism insight panel member</li>
					<li>
						Community Advisory panel member for the Autism Centre of Excellence
						Cambridge
					</li>
				</ul> */}
			{/* </section> */}
		</main>
	);
}
