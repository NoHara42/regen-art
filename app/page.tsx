"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Leaf, Users, Coins } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

export default function Home() {
	return (
		<div className="container mx-auto px-4 py-16">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-center mb-16"
			>
				<h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
					Regen-Art Collective
				</h1>
				<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
					We&apos;re reshaping the art world through NFTs, empowering
					artists while supporting regenerative communities. Join us
					in creating a sustainable future for art and society.
				</p>
				<div className="mt-8">
					<Link href="/artists">
						<Button
							size="lg"
							className="mr-4 relative overflow-hidden group"
						>
							<span className="relative z-10">
								Join as Artist
							</span>
							<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
						</Button>
					</Link>
					<Link href="/art">
						<Button
							size="lg"
							variant="outline"
							className="relative overflow-hidden group"
						>
							<span className="relative z-10">Explore Art</span>
							<div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
						</Button>
					</Link>
				</div>
			</motion.div>

			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
			>
				{[
					{
						icon: Palette,
						title: "Artist Support",
						description:
							"We provide technical guidance and support to help artists mint their work as NFTs.",
					},
					{
						icon: Coins,
						title: "Fair Revenue",
						description:
							"50% of sales go directly to artists, with the other 50% supporting platform growth and art residencies.",
					},
					{
						icon: Leaf,
						title: "Regenerative Focus",
						description:
							"Supporting regenerative communities and sustainable practices in the art world.",
					},
					{
						icon: Users,
						title: "Community",
						description:
							"Join a growing community of artists and collectors committed to positive change.",
					},
				].map((feature, index) => (
					<motion.div key={feature.title} variants={item}>
						<Card className="group hover:shadow-lg transition-shadow duration-300">
							<CardContent className="pt-6">
								<div className="flex items-center gap-4 mb-4">
									<feature.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
									<h3 className="text-xl font-semibold">
										{feature.title}
									</h3>
								</div>
								<p className="text-muted-foreground">
									{feature.description}
								</p>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
