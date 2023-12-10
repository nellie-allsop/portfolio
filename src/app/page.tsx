import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>Nellie Allsop | portfolio</div>
			<Image className="rounded border-8 border-orange-400 m-8" src='/presentation.jpg' alt='Nellie presenting during her graduation from a full stack bootcamp' height={400} width={387}></Image>
		</main>
	);
}
