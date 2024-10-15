import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800",], subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Another SaaS landing",
	description: "Manage, Grow and Build your Business with SaaS landing",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={poppins.className}>{children}</body>
			<GoogleAnalytics gaId="G-RB5FKYHHTX" />
		</html>
	);
}
