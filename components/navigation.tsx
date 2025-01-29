"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Palette } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { motion } from "framer-motion";

export function Navigation() {
	const pathname = usePathname();

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

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
		>
			<div className="container flex h-14 items-center">
				<div className="mr-4 flex">
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
					<nav className="flex items-center space-x-6 text-sm font-medium">
						{routes.map((route) => (
							<Link
								key={route.href}
								href={route.href}
								className={cn(
									"transition-colors hover:text-primary relative",
									pathname === route.href
										? "text-foreground"
										: "text-foreground/60"
								)}
							>
								{route.label}
								{pathname === route.href && (
									<motion.div
										layoutId="underline"
										className="absolute left-0 right-0 h-0.5 bg-primary bottom-[-18px]"
									/>
								)}
							</Link>
						))}
					</nav>
				</div>
				<div className="ml-auto flex items-center space-x-4">
					<ModeToggle />
				</div>
			</div>
		</motion.header>
	);
}
