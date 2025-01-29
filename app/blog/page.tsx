"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
	{
		slug: "artist-support-technical-guidance",
		title: "Artist Support: Technical Guidance for NFT Creation",
		date: "2024-04-01",
		category: "Technology",
		excerpt:
			"Breaking down technical barriers for artists in the digital art world.",
	},
	{
		slug: "fair-revenue-model",
		title: "Fair Revenue: Redefining Artist Compensation",
		date: "2024-04-02",
		category: "Economics",
		excerpt:
			"Our revolutionary approach to ensuring artists receive fair compensation.",
	},
	{
		slug: "regenerative-focus-sustainable-art",
		title: "Regenerative Focus: Art as a Catalyst for Sustainable Change",
		date: "2024-04-03",
		category: "Sustainability",
		excerpt:
			"How art can actively contribute to ecological and social restoration.",
	},
	{
		slug: "community-collective-impact",
		title: "Community: Collective Impact in the Art World",
		date: "2024-04-04",
		category: "Community",
		excerpt: "Building a transformative, collaborative artistic ecosystem.",
	},
	{
		slug: "reshaping-art-world-through-nfts",
		title: "Reshaping the Art World Through NFTs",
		date: "2024-03-20",
		category: "Technology",
		excerpt: "How blockchain technology is democratizing art ownership.",
	},
	{
		slug: "beyond-tax-havens",
		title: "Beyond Tax Havens: Art as a Force for Good",
		date: "2024-03-18",
		category: "Investment",
		excerpt:
			"Transforming art investment into a catalyst for positive change.",
	},
	{
		slug: "future-of-art-residencies",
		title: "The Future of Art Residencies",
		date: "2024-03-15",
		category: "Community",
		excerpt:
			"Reimagining creative spaces as catalysts for community development.",
	},
	{
		slug: "arts-role-in-environmental-regeneration",
		title: "Art's Role in Environmental Regeneration",
		date: "2024-03-12",
		category: "Environment",
		excerpt:
			"Exploring how art can be an active force in environmental restoration.",
	},
];

export default function BlogPage() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="container mx-auto px-4 py-16"
		>
			<div className="text-center mb-16">
				<h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
					Regen Art Blog
				</h1>
				<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
					Insights, stories, and perspectives on regenerative art,
					technology, and community transformation.
				</p>
			</div>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{blogPosts.map((post) => (
					<Link key={post.slug} href={`/blog/${post.slug}`}>
						<Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
							<CardHeader>
								<div className="flex justify-between items-center mb-2">
									<CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
										{post.title}
									</CardTitle>
								</div>
								<div className="flex items-center space-x-4">
									<span className="text-xs text-primary">
										{post.category}
									</span>
									<span className="text-xs text-muted-foreground">
										{post.date}
									</span>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-muted-foreground">
									{post.excerpt}
								</p>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
		</motion.div>
	);
}
