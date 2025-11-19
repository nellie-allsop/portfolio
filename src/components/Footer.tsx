import Link from "next/link";

export default function Footer() {
	return (
		<footer className="flex flex-col p-4 justify-center items-center">
			<p className="p-2">
				Find me on 
				<Link
					href="https://www.linkedin.com/in/nellie-allsop/"
					className="font-extrabold text-pink"
				>
					{" "}
					LinkedIn
					{" "}
				</Link>
				 and
								<Link
					href="https://www.instagram.com/nellie.allsop/"
					className="font-extrabold text-pink"
				>
					{" "}
					Instagram
				</Link>
			</p>
			<div className="text-xs">
				<p>
					&copy; 2024 Nellie Allsop, with thanks to 🧠{" "}
					<Link href="https://www.linkedin.com/in/hortfrancis/">
						{" "}
						Alex Hort-Francis
					</Link>{" "}
					and 📸
					<Link href="https://www.instagram.com/xsimrrx/"> Monika Świat</Link>
				</p>
			</div>
		</footer>
	);
}
