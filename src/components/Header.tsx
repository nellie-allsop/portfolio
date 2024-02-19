import React from "react";
import Link from "next/link";

export default function Header() {
	return (
		<div className="bg-green text-white flex flex-col">
			<nav className="flex justify-around m-4 text-2xl">
				<Link href="/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="50"
					zoomAndPan="magnify"
					viewBox="0 0 375 374.999991"
					height="50"
					preserveAspectRatio="xMidYMid meet"
					version="1.0"
				>
					<defs>
						<clipPath id="8dac4035ce">
							<path
								d="M 0 75 L 75 75 L 75 150 L 0 150 Z M 0 75 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="f5b33da7ba">
							<path
								d="M 11.71875 75 L 63.28125 75 C 66.390625 75 69.371094 76.234375 71.566406 78.433594 C 73.765625 80.628906 75 83.609375 75 86.71875 L 75 138.28125 C 75 144.753906 69.753906 150 63.28125 150 L 11.71875 150 C 8.609375 150 5.628906 148.765625 3.433594 146.566406 C 1.234375 144.371094 0 141.390625 0 138.28125 L 0 86.71875 C 0 80.246094 5.246094 75 11.71875 75 Z M 11.71875 75 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="836835bbad">
							<path
								d="M 75 150 L 150 150 L 150 225 L 75 225 Z M 75 150 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="3bb865f1b6">
							<path
								d="M 86.71875 150 L 138.28125 150 C 141.390625 150 144.371094 151.234375 146.566406 153.433594 C 148.765625 155.628906 150 158.609375 150 161.71875 L 150 213.28125 C 150 219.753906 144.753906 225 138.28125 225 L 86.71875 225 C 83.609375 225 80.628906 223.765625 78.433594 221.566406 C 76.234375 219.371094 75 216.390625 75 213.28125 L 75 161.71875 C 75 155.246094 80.246094 150 86.71875 150 Z M 86.71875 150 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="b6307fd888">
							<path
								d="M 75 0 L 150 0 L 150 75 L 75 75 Z M 75 0 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="bb53bab75e">
							<path
								d="M 86.71875 0 L 138.28125 0 C 141.390625 0 144.371094 1.234375 146.566406 3.433594 C 148.765625 5.628906 150 8.609375 150 11.71875 L 150 63.28125 C 150 69.753906 144.753906 75 138.28125 75 L 86.71875 75 C 83.609375 75 80.628906 73.765625 78.433594 71.566406 C 76.234375 69.371094 75 66.390625 75 63.28125 L 75 11.71875 C 75 5.246094 80.246094 0 86.71875 0 Z M 86.71875 0 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="6f8767de16">
							<path
								d="M 0 0 L 75 0 L 75 75 L 0 75 Z M 0 0 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="5929ad444d">
							<path
								d="M 11.71875 0 L 63.28125 0 C 66.390625 0 69.371094 1.234375 71.566406 3.433594 C 73.765625 5.628906 75 8.609375 75 11.71875 L 75 63.28125 C 75 69.753906 69.753906 75 63.28125 75 L 11.71875 75 C 8.609375 75 5.628906 73.765625 3.433594 71.566406 C 1.234375 69.371094 0 66.390625 0 63.28125 L 0 11.71875 C 0 5.246094 5.246094 0 11.71875 0 Z M 11.71875 0 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="20ba57bd7f">
							<path
								d="M 26.179688 75 L 75 75 L 75 150 L 26.179688 150 Z M 26.179688 75 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="cbbd4daca2">
							<path
								d="M 75 0 L 122.511719 0 L 122.511719 75 L 75 75 Z M 75 0 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="2ef8fda030">
							<path
								d="M 18.480469 0 L 75 0 L 75 75 L 18.480469 75 Z M 18.480469 0 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="9a29dc92f8">
							<path
								d="M 95.019531 150 L 150 150 L 150 225 L 95.019531 225 Z M 95.019531 150 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="ca4c9c522a">
							<path
								d="M 225 300 L 300 300 L 300 375 L 225 375 Z M 225 300 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="848b4d95fd">
							<path
								d="M 236.71875 300 L 288.28125 300 C 291.390625 300 294.371094 301.234375 296.566406 303.433594 C 298.765625 305.628906 300 308.609375 300 311.71875 L 300 363.28125 C 300 369.753906 294.753906 375 288.28125 375 L 236.71875 375 C 233.609375 375 230.628906 373.765625 228.433594 371.566406 C 226.234375 369.371094 225 366.390625 225 363.28125 L 225 311.71875 C 225 305.246094 230.246094 300 236.71875 300 Z M 236.71875 300 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="253685bc9f">
							<path
								d="M 247.1875 300 L 300 300 L 300 375 L 247.1875 375 Z M 247.1875 300 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="2b4eac3e58">
							<path
								d="M 150 225 L 225 225 L 225 300 L 150 300 Z M 150 225 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="b4f28cf267">
							<path
								d="M 161.71875 225 L 213.28125 225 C 216.390625 225 219.371094 226.234375 221.566406 228.433594 C 223.765625 230.628906 225 233.609375 225 236.71875 L 225 288.28125 C 225 294.753906 219.753906 300 213.28125 300 L 161.71875 300 C 158.609375 300 155.628906 298.765625 153.433594 296.566406 C 151.234375 294.371094 150 291.390625 150 288.28125 L 150 236.71875 C 150 230.246094 155.246094 225 161.71875 225 Z M 161.71875 225 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="efaddc8012">
							<path
								d="M 176.691406 225 L 225 225 L 225 300 L 176.691406 300 Z M 176.691406 225 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="19b155314b">
							<path
								d="M 300 300 L 375 300 L 375 375 L 300 375 Z M 300 300 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="c45a176bcc">
							<path
								d="M 311.71875 300 L 363.28125 300 C 366.390625 300 369.371094 301.234375 371.566406 303.433594 C 373.765625 305.628906 375 308.609375 375 311.71875 L 375 363.28125 C 375 369.753906 369.753906 375 363.28125 375 L 311.71875 375 C 308.609375 375 305.628906 373.765625 303.433594 371.566406 C 301.234375 369.371094 300 366.390625 300 363.28125 L 300 311.71875 C 300 305.246094 305.246094 300 311.71875 300 Z M 311.71875 300 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="68af4d89e7">
							<path
								d="M 300 300 L 375 300 L 375 337.5 L 300 337.5 Z M 300 300 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="6d1e5f5211">
							<path
								d="M 300 225 L 375 225 L 375 300 L 300 300 Z M 300 225 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="a9d538018a">
							<path
								d="M 311.71875 225 L 363.28125 225 C 366.390625 225 369.371094 226.234375 371.566406 228.433594 C 373.765625 230.628906 375 233.609375 375 236.71875 L 375 288.28125 C 375 294.753906 369.753906 300 363.28125 300 L 311.71875 300 C 308.609375 300 305.628906 298.765625 303.433594 296.566406 C 301.234375 294.371094 300 291.390625 300 288.28125 L 300 236.71875 C 300 230.246094 305.246094 225 311.71875 225 Z M 311.71875 225 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="9ce2e125d8">
							<path
								d="M 300 225 L 348.050781 225 L 348.050781 300 L 300 300 Z M 300 225 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="362fcb116d">
							<path
								d="M 225 150 L 300 150 L 300 225 L 225 225 Z M 225 150 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="cc161e2ec4">
							<path
								d="M 236.71875 150 L 288.28125 150 C 291.390625 150 294.371094 151.234375 296.566406 153.433594 C 298.765625 155.628906 300 158.609375 300 161.71875 L 300 213.28125 C 300 219.753906 294.753906 225 288.28125 225 L 236.71875 225 C 233.609375 225 230.628906 223.765625 228.433594 221.566406 C 226.234375 219.371094 225 216.390625 225 213.28125 L 225 161.71875 C 225 155.246094 230.246094 150 236.71875 150 Z M 236.71875 150 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="0bd0546df2">
							<path
								d="M 225 150 L 269.375 150 L 269.375 225 L 225 225 Z M 225 150 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="d708f0c555">
							<path
								d="M 150 75 L 225 75 L 225 150 L 150 150 Z M 150 75 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="2a86e8af47">
							<path
								d="M 161.71875 75 L 213.28125 75 C 216.390625 75 219.371094 76.234375 221.566406 78.433594 C 223.765625 80.628906 225 83.609375 225 86.71875 L 225 138.28125 C 225 144.753906 219.753906 150 213.28125 150 L 161.71875 150 C 158.609375 150 155.628906 148.765625 153.433594 146.566406 C 151.234375 144.371094 150 141.390625 150 138.28125 L 150 86.71875 C 150 80.246094 155.246094 75 161.71875 75 Z M 161.71875 75 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="fa6e46424b">
							<path
								d="M 150 75 L 203.382812 75 L 203.382812 150 L 150 150 Z M 150 75 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="22dae23037">
							<path
								d="M 150 96.617188 L 225 96.617188 L 225 150 L 150 150 Z M 150 96.617188 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="7e6c825a4d">
							<path
								d="M 224.996094 180.621094 L 299.996094 180.621094 L 299.996094 224.996094 L 224.996094 224.996094 Z M 224.996094 180.621094 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="58bba18f15">
							<path
								d="M 300 251.949219 L 375 251.949219 L 375 300 L 300 300 Z M 300 251.949219 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="fb85922f5d">
							<path
								d="M 300 300 L 337.5 300 L 337.5 375 L 300 375 Z M 300 300 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="b9142812c5">
							<path
								d="M 224.996094 299.996094 L 299.996094 299.996094 L 299.996094 352.808594 L 224.996094 352.808594 Z M 224.996094 299.996094 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="46df525d7a">
							<path
								d="M 149.996094 224.996094 L 224.996094 224.996094 L 224.996094 273.308594 L 149.996094 273.308594 Z M 149.996094 224.996094 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="9ec331dc01">
							<path
								d="M 74.996094 149.996094 L 149.996094 149.996094 L 149.996094 204.976562 L 74.996094 204.976562 Z M 74.996094 149.996094 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="ff515eac4d">
							<path
								d="M 0 74.996094 L 74.996094 74.996094 L 74.996094 123.8125 L 0 123.8125 Z M 0 74.996094 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="167cc9f2e9">
							<path
								d="M 0 18.476562 L 74.996094 18.476562 L 74.996094 74.996094 L 0 74.996094 Z M 0 18.476562 "
								clip-rule="nonzero"
							/>
						</clipPath>
						<clipPath id="dd29e2a0ea">
							<path
								d="M 75 27.488281 L 150 27.488281 L 150 75 L 75 75 Z M 75 27.488281 "
								clip-rule="nonzero"
							/>
						</clipPath>
					</defs>
					<g clip-path="url(#8dac4035ce)">
						<g clip-path="url(#f5b33da7ba)">
							<path
								fill="#ff6600"
								d="M 0 75 L 75 75 L 75 150 L 0 150 Z M 0 75 "
								fill-opacity="1"
								fill-rule="nonzero"
							/>
						</g>
					</g>
					<g clip-path="url(#836835bbad)">
						<g clip-path="url(#3bb865f1b6)">
							<path
								fill="#ffde00"
								d="M 75 150 L 150 150 L 150 225 L 75 225 Z M 75 150 "
								fill-opacity="1"
								fill-rule="nonzero"
							/>
						</g>
					</g>
					<g clip-path="url(#b6307fd888)">
						<g clip-path="url(#bb53bab75e)">
							<path
								fill="#ff3300"
								d="M 75 0 L 150 0 L 150 75 L 75 75 Z M 75 0 "
								fill-opacity="1"
								fill-rule="nonzero"
							/>
						</g>
					</g>
					<g clip-path="url(#6f8767de16)">
						<g clip-path="url(#5929ad444d)">
							<path
								fill="#ff0000"
								d="M 0 0 L 75 0 L 75 75 L 0 75 Z M 0 0 "
								fill-opacity="1"
								fill-rule="nonzero"
							/>
						</g>
					</g>
					<path
						fill="#ff9900"
						d="M 75 75 L 150 75 L 150 150 L 75 150 Z M 75 75 "
						fill-opacity="1"
						fill-rule="nonzero"
					/>
					<g clip-path="url(#20ba57bd7f)">
						<path
							fill="#ff6600"
							d="M 26.179688 75 L 75 75 L 75 149.945312 L 26.179688 149.945312 Z M 26.179688 75 "
							fill-opacity="1"
							fill-rule="nonzero"
						/>
					</g>
					<g clip-path="url(#cbbd4daca2)">
						<path
							fill="#ff3300"
							d="M 75 0 L 122.511719 0 L 122.511719 74.976562 L 75 74.976562 Z M 75 0 "
							fill-opacity="1"
							fill-rule="nonzero"
						/>
					</g>
					<g clip-path="url(#2ef8fda030)">
						<path
							fill="#ff0000"
							d="M 18.480469 0 L 75 0 L 75 75.066406 L 18.480469 75.066406 Z M 18.480469 0 "
							fill-opacity="1"
							fill-rule="nonzero"
						/>
					</g>
					<g clip-path="url(#9a29dc92f8)">
						<path
							fill="#ffde00"
							d="M 95.019531 150 L 150 150 L 150 224.953125 L 95.019531 224.953125 Z M 95.019531 150 "
							fill-opacity="1"
							fill-rule="nonzero"
						/>
					</g>
					<g clip-path="url(#ca4c9c522a)">
						<g clip-path="url(#848b4d95fd)">
							<path
								fill="#00ffb3"
								d="M 225 300 L 300 300 L 300 375 L 225 375 Z M 225 300 "
								fill-opacity="1"
								fill-rule="nonzero"
							/>
						</g>
					</g>
					<g clip-path="url(#253685bc9f)">
						<path
							fill="#00ffb3"
							d="M 247.1875 300 L 300 300 L 300 375.09375 L 247.1875 375.09375 Z M 247.1875 300 "
							fill-opacity="1"
							fill-rule="nonzero"
						/>
					</g>
					<path
						fill="#99ff00"
						d="M 225 225 L 300 225 L 300 300 L 225 300 Z M 225 225 "
						fill-opacity="1"
						fill-rule="nonzero"
					/>
					<g clip-path="url(#2b4eac3e58)">
						<g clip-path="url(#b4f28cf267)">
							<path
								fill="#ccff00"
								d="M 150 225 L 225 225 L 225 300 L 150 300 Z M 150 225 "
								fill-opacity="1"
								fill-rule="nonzero"
							/>
						</g>
					</g>
					<g clip-path="url(#efaddc8012)">
						<path
							fill="#ccff00"
							d="M 176.691406 225 L 225 225 L 225 299.917969 L 176.691406 299.917969 Z M 176.691406 225 "
							fill-opacity="1"
							fill-rule="nonzero"
						/>
					</g>
					<path
						fill="#ffff00"
						d="M 150 150 L 225 150 L 225 225 L 150 225 Z M 150 150 "
						fill-opacity="1"
						fill-rule="nonzero"
					/>
					<g clip-path="url(#19b155314b)">
						<g clip-path="url(#c45a176bcc)">
							<path
								fill="#00ffe8"
								d="M 300 300 L 375 300 L 375 375 L 300 375 Z M 300 300 "
								fill-opacity="1"
								fill-rule="nonzero"
							/>
						</g>
					</g>
					<g clip-path="url(#68af4d89e7)">
						<path
							fill="#00ffe8"
							d="M 300 300 L 375 300 L 375 337.5 L 300 337.5 Z M 300 300 "
							fill-opacity="1"
							fill-rule="nonzero"
						/>
					</g>
					<g clip-path="url(#6d1e5f5211)">
						<g clip-path="url(#a9d538018a)">
							<path
								fill="#66ff00"
								d="M 300 225 L 375 225 L 375 300 L 300 300 Z M 300 225 "
								fill-opacity="1"
								fill-rule="nonzero"
							/>
						</g>
					</g>
					<g clip-path="url(#9ce2e125d8)">
						<path
							fill="#66ff00"
							d="M 300 225 L 348.050781 225 L 348.050781 300.078125 L 300 300.078125 Z M 300 225 "
							fill-opacity="1"
							fill-rule="nonzero"
						/>
					</g>
					<g clip-path="url(#362fcb116d)">
						<g clip-path="url(#cc161e2ec4)">
							<path
								fill="#e3ff00"
								d="M 225 150 L 300 150 L 300 225 L 225 225 Z M 225 150 "
								fill-opacity="1"
								fill-rule="nonzero"
							/>
						</g>
					</g>
					<g clip-path="url(#0bd0546df2)">
						<path
							fill="#e3ff00"
							d="M 225 150 L 269.375 150 L 269.375 225.054688 L 225 225.054688 Z M 225 150 "
							fill-opacity="1"
							fill-rule="nonzero"
						/>
					</g>
					<g clip-path="url(#d708f0c555)">
						<g clip-path="url(#2a86e8af47)">
							<path
								fill="#ffb800"
								d="M 150 75 L 225 75 L 225 150 L 150 150 Z M 150 75 "
								fill-opacity="1"
								fill-rule="nonzero"
							/>
						</g>
					</g>
					<g clip-path="url(#fa6e46424b)">
						<path
							fill="#ffb800"
							d="M 150 75 L 203.382812 75 L 203.382812 150.070312 L 150 150.070312 Z M 150 75 "
							fill-opacity="1"
							fill-rule="nonzero"
						/>
					</g>
					<g clip-path="url(#22dae23037)">
						<path
							fill="#ffb800"
							d="M 150 150 L 150 96.617188 L 225.066406 96.617188 L 225.066406 150 Z M 150 150 "
							fill-opacity="1"
							fill-rule="nonzero"
						/>
					</g>
					<g clip-path="url(#7e6c825a4d)">
						<path
							fill="#e3ff00"
							d="M 224.996094 224.996094 L 224.996094 180.621094 L 300.050781 180.621094 L 300.050781 224.996094 Z M 224.996094 224.996094 "
							fill-opacity="1"
							fill-rule="nonzero"
						/>
					</g>
					<g clip-path="url(#58bba18f15)">
						<path
							fill="#66ff00"
							d="M 300 300 L 300 251.949219 L 375.074219 251.949219 L 375.074219 300 Z M 300 300 "
							fill-opacity="1"
							fill-rule="nonzero"
						/>
					</g>
					<g clip-path="url(#fb85922f5d)">
						<path
							fill="#00ffe8"
							d="M 300 375 L 300 300 L 337.5 300 L 337.5 375 Z M 300 375 "
							fill-opacity="1"
							fill-rule="nonzero"
						/>
					</g>
					<g clip-path="url(#b9142812c5)">
						<path
							fill="#00ffb3"
							d="M 224.996094 352.808594 L 224.996094 299.996094 L 300.089844 299.996094 L 300.089844 352.808594 Z M 224.996094 352.808594 "
							fill-opacity="1"
							fill-rule="nonzero"
						/>
					</g>
					<g clip-path="url(#46df525d7a)">
						<path
							fill="#ccff00"
							d="M 149.996094 273.308594 L 149.996094 224.996094 L 224.914062 224.996094 L 224.914062 273.308594 Z M 149.996094 273.308594 "
							fill-opacity="1"
							fill-rule="nonzero"
						/>
					</g>
					<g clip-path="url(#9ec331dc01)">
						<path
							fill="#ffde00"
							d="M 74.996094 204.976562 L 74.996094 149.996094 L 149.949219 149.996094 L 149.949219 204.976562 Z M 74.996094 204.976562 "
							fill-opacity="1"
							fill-rule="nonzero"
						/>
					</g>
					<g clip-path="url(#ff515eac4d)">
						<path
							fill="#ff6600"
							d="M -0.00390625 123.8125 L -0.00390625 74.996094 L 74.941406 74.996094 L 74.941406 123.8125 Z M -0.00390625 123.8125 "
							fill-opacity="1"
							fill-rule="nonzero"
						/>
					</g>
					<g clip-path="url(#167cc9f2e9)">
						<path
							fill="#ff0000"
							d="M -0.00390625 74.996094 L -0.00390625 18.476562 L 75.058594 18.476562 L 75.058594 74.996094 Z M -0.00390625 74.996094 "
							fill-opacity="1"
							fill-rule="nonzero"
						/>
					</g>
					<g clip-path="url(#dd29e2a0ea)">
						<path
							fill="#ff3300"
							d="M 75 75 L 75 27.488281 L 149.976562 27.488281 L 149.976562 75 Z M 75 75 "
							fill-opacity="1"
							fill-rule="nonzero"
						/>
					</g>
				</svg>
				</Link>
				<Link href="/" className="hover:bg-red focus:bg-blue">
					Home
				</Link>
				<Link href="/autism" className="hover:bg-red focus:bg-blue">
					Autism
				</Link>
				<Link href="/webdev" className="hover:bg-red focus:bg-blue">
					Coding
				</Link>
				<Link href="/contact" className="hover:bg-red focus:bg-blue">
					Contact
				</Link>
			</nav>
		</div>
	);
}
