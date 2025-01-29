"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Palette, Menu } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { motion } from "framer-motion";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Navigation() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = React.useState(false);

	const routes = [
		{
			href: "/",
			label: "Home",
		},
		{
			href: "/artists",
			label: "Artists",
		},
		{
			href: "/art",
			label: "Art",
		},
		{
			href: "/regeneration",
			label: "Regeneration",
		},
		{
			href: "/blog",
			label: "Blog",
		},
	];

	const NavLinks = ({ isMobile = false }) => (
		<>
			{routes.map((route) => (
				<Link
					key={route.href}
					href={route.href}
					onClick={() => isMobile && setIsOpen(false)}
					className={cn(
						"transition-colors align-middle h-full content-center hover:text-primary relative",
						isMobile
							? "block py-4 text-lg border-b"
							: "transition-colors hover:text-primary relative",
						pathname === route.href
							? "text-foreground"
							: "text-foreground/60"
					)}
				>
					{route.label}
					{!isMobile && pathname === route.href && (
						<motion.div
							layoutId="underline"
							className="absolute left-0 right-0 h-0.5 bg-primary bottom-0"
						/>
					)}
				</Link>
			))}
		</>
	);

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
		>
			<div className="container flex h-14 items-center justify-between">
				<div className="flex items-center">
					<Link
						href="/"
						className="mr-6 pl-2 flex items-center space-x-2 group"
					>
						<motion.div
							whileHover={{ rotate: 180 }}
							transition={{ duration: 0.3 }}
						>
							<Palette className="h-6 w-6" />
						</motion.div>
						<span className="font-bold group-hover:text-primary transition-colors">
							Regen Art
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-4">
						<NavLinks />
					</nav>
				</div>

				<div className="flex items-center">
					{/* Mobile Navigation */}
					<div className="md:hidden mr-4">
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon">
									<Menu className="h-6 w-6" />
								</Button>
							</SheetTrigger>
							<SheetContent side="top" className="w-full">
								<SheetHeader>
									<SheetTitle className="text-center">
										Navigation
									</SheetTitle>
								</SheetHeader>
								<nav className="flex flex-col space-y-4 mt-8">
									<NavLinks isMobile={true} />
								</nav>
								<div className="mt-8 flex justify-center">
									<ModeToggle />
								</div>
							</SheetContent>
						</Sheet>
					</div>

					{/* Desktop Mode Toggle */}
					<div className="hidden md:block">
						<ModeToggle />
					</div>
				</div>
			</div>
		</motion.header>
	);
}
