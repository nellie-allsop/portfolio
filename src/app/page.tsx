import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-100">
			<h1>Which type of Nellie?</h1>
			<div className="bg-red-100">
				<Link href="/portfolio">Aspiring dev</Link>
				<Link href="/autism">Expert by experience</Link>
			</div>

			<Image
				className="rounded border-8 border-orange-400 m-8"
				src="/presentation.jpg"
				alt="Nellie presenting during her graduation from a full stack bootcamp"
				height={400}
				width={387}
			></Image>
						<Image
				className="m-8"
				src="/cloud.png"
				alt="cloud"
				height={400}
				width={387}
			></Image>
		</main>
	);
}
