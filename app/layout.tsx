import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Regen-Art Collective",
	description:
		"A platform for artists to create and sell NFTs while supporting regenerative communities",
	viewport: "width=device-width, initial-scale=1, maximum-scale=1",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "hsl(0 0% 100%)" },
		{ media: "(prefers-color-scheme: dark)", color: "hsl(0 0% 3.9%)" },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${inter.variable} scroll-smooth antialiased`}
		>
			<body className={`${inter.className} min-h-screen flex flex-col`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navigation />
					<main className="flex-grow container mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
						{children}
					</main>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
