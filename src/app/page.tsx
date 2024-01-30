import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-blue p-1">
			<h1 className="text-3xl text-green m-8">
				nellie | autistic coder and public speaker
			</h1>
			<section className="bg-cream p-4 rounded-2xl">Hello! Please head to the clouds below to discover more about my life experiences </section>
			<Image
				className="rounded-2xl m-8"
				src="/portrait.jpg"
				alt="Nellie presenting during her graduation from a full stack bootcamp"
				height={427.2}
				width={284.8}
			></Image>

			<div className="flex">
				{/* Cloud one */}
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
						<pattern id="background" x="0" y="0" height="1" width="1">
							<image width="830" height="467" href="/background.jpg"></image>
						</pattern>
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
								className="cloud"
								d="M 667.359375 407.675781 C 666.292969 407.675781 665.238281 407.722656 664.179688 407.757812 C 664.226562 406.535156 664.273438 405.316406 664.273438 404.082031 C 664.273438 351.953125 622.015625 309.695312 569.890625 309.695312 C 557.917969 309.695312 546.472656 311.949219 535.9375 316.015625 C 509.617188 253.945312 448.121094 210.40625 376.457031 210.40625 C 314.609375 210.40625 260.371094 242.859375 229.746094 291.636719 C 218.753906 288.578125 207.1875 286.910156 195.222656 286.910156 C 124.269531 286.910156 66.746094 344.429688 66.746094 415.382812 C 66.746094 429.460938 69.046875 442.992188 73.230469 455.671875 C 56.921875 470.839844 46.707031 492.472656 46.707031 516.503906 C 46.707031 559.164062 78.871094 594.300781 120.265625 599.019531 L 120.3125 599.582031 L 121.820312 599.296875 L 123.179688 599.296875 C 125.363281 599.464844 127.558594 599.582031 129.785156 599.582031 C 132.007812 599.582031 134.207031 599.464844 136.386719 599.296875 L 661.027344 599.296875 C 663.121094 599.429688 665.230469 599.527344 667.359375 599.527344 C 720.339844 599.527344 763.285156 556.578125 763.285156 503.601562 C 763.285156 450.625 720.339844 407.675781 667.359375 407.675781 Z M 667.359375 407.675781 "
								fill-opacity="1"
								fill-rule="nonzero"
								fill="url(#background)"
							/>
							<text
								id="autism"
								x="400"
								y="500"
								fontSize="150"
								textAnchor="middle"
								fill="#1A535C"
							>
								Autism
							</text>
						</g>
					</Link>
				</svg>

				{/* Cloud two */}
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
						<pattern id="background" x="0" y="0" height="1" width="1">
							<image width="830" height="467" href="/background.jpg"></image>
						</pattern>
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
								className="cloud"
								d="M 667.359375 407.675781 C 666.292969 407.675781 665.238281 407.722656 664.179688 407.757812 C 664.226562 406.535156 664.273438 405.316406 664.273438 404.082031 C 664.273438 351.953125 622.015625 309.695312 569.890625 309.695312 C 557.917969 309.695312 546.472656 311.949219 535.9375 316.015625 C 509.617188 253.945312 448.121094 210.40625 376.457031 210.40625 C 314.609375 210.40625 260.371094 242.859375 229.746094 291.636719 C 218.753906 288.578125 207.1875 286.910156 195.222656 286.910156 C 124.269531 286.910156 66.746094 344.429688 66.746094 415.382812 C 66.746094 429.460938 69.046875 442.992188 73.230469 455.671875 C 56.921875 470.839844 46.707031 492.472656 46.707031 516.503906 C 46.707031 559.164062 78.871094 594.300781 120.265625 599.019531 L 120.3125 599.582031 L 121.820312 599.296875 L 123.179688 599.296875 C 125.363281 599.464844 127.558594 599.582031 129.785156 599.582031 C 132.007812 599.582031 134.207031 599.464844 136.386719 599.296875 L 661.027344 599.296875 C 663.121094 599.429688 665.230469 599.527344 667.359375 599.527344 C 720.339844 599.527344 763.285156 556.578125 763.285156 503.601562 C 763.285156 450.625 720.339844 407.675781 667.359375 407.675781 Z M 667.359375 407.675781 "
								fill-opacity="1"
								fill-rule="nonzero"
								fill="url(#background)"
							/>
							<text
								x="400"
								y="500"
								fontSize="150"
								textAnchor="middle"
								fill="#1A535C"
							>
								Coding
							</text>
						</g>
					</Link>
				</svg>
			</div>
		</main>
	);
}
