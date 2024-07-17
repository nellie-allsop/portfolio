import Link from "next/link";

export default function Footer() {
	return (
		<footer className="flex flex-col p-4 justify-center items-center">
			<p className="p-2">
				Find me on LinkedIn
				<Link
					href="https://www.linkedin.com/in/nellie-allsop/"
					className="font-extrabold text-pink"
				>
					{" "}
					here
				</Link>
			</p>
			<p>&copy; 2024 Nellie Allsop</p>
		</footer>
	);
}
