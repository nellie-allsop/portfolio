import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { Paytone_One } from "next/font/google";
import { Cabin } from "next/font/google";
import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title: 'Nellie Allsop | autistic expert by lived experience',
  description: 'See how you and your business can learn more about autism',
	viewport: 'width=device-width, initial-scale=1, maximum-scale=1'
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${paytoneOne.variable} ${cabin.variable} scroll-smooth bg-neutral-100`}>
			<body>
				<Providers>
					{children}
					<Footer />
				</Providers>
				<GoogleTagManager gtmId="G-ZJ22HDS4PL" />
			</body>
		</html>
	);
}
