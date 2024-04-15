import React from "react";
// import { useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

export default function VennDiagram() {
	// const animation = gsap.to(".circle", { scrollTrigger: ".circle", x: 500 });

	return (
		<div>
			<svg
				id="e5Gb6F1A9UZ1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1920 1080"
				shape-rendering="geometricPrecision"
				text-rendering="geometricPrecision"
			>
				<ellipse
					rx="428.905682"
					ry="428.905682"
					transform="translate(585.774344 540)"
					fill="rgba(210,219,237,0)"
					stroke="#000"
				/>
				<ellipse
					rx="428.905682"
					ry="428.905682"
					transform="translate(1091.552569 540)"
					fill="rgba(210,219,237,0)"
					stroke="#000"
				/>
				<ellipse
					rx="192"
					ry="108"
					transform="matrix(.983924 0 0 3.217244 843.663074 540)"
					fill="none"
					stroke-width="0"
				/>
			</svg>
		</div>
	);
}
