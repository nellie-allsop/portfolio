"use client";

// import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Providers } from "./providers";
import { Paytone_One } from "next/font/google";
import { Cabin } from "next/font/google";

const cabin = Cabin({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-cabin",
});
const paytoneOne = Paytone_One({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-paytone-one",
});

// export const metadata: Metadata = {
//   title: 'Nellie Allsop | Aspiring dev and EbE',
//   description: 'Created using next.js, typescript and tailwind',
// }

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${paytoneOne.variable} ${cabin.variable}`}>
			<body>
				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
				<GoogleTagManager gtmId="G-ZJ22HDS4PL" />
			</body>
		</html>
	);
}
