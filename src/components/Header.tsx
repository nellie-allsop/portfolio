import Link from "next/link";

export default function Header() {
	return (
		<header>
			<nav className="bg-green-200 flex justify-around p-4 text-3xl">
				<Link className="bg-red-300 rounded hover:text-red-500 p-3" href="/">Home</Link>
				<Link className="bg-red-300 rounded hover:text-red-500 p-3" href="/">Autism</Link>
				<Link className="bg-red-300 rounded hover:text-red-500 p-3" href="/">Dev</Link>
			</nav>
		</header>
	);
}
