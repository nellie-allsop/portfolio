"use client";

// import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { Comfortaa } from "next/font/google";
import Header from "@/components/Header";
import { Providers } from "./providers";
import VennDiagram from "@/components/VennDiagram"
import Testimonials from "@/components/Testimonials"
import Offer from "@/components/Offer"
import CTA from "@/components/CTA"
import Contact from "@/components/Contact"
import WhyMe from "@/components/WhyMe"

const font = Comfortaa({ subsets: ["latin"] });

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
		<html lang="en">
			<body className={font.className}>
				<Providers>
					<Header />
					{children}
					<VennDiagram />
					<WhyMe />
					<Offer />
					<CTA />
					<Testimonials />
					<Contact />
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
