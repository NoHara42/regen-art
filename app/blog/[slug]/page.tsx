"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { use } from "react";

const blogPosts = {
	"reshaping-art-world-through-nfts": {
		title: "Reshaping the Art World Through NFTs",
		date: "2024-03-20",
		category: "Technology",
		content: `
      <p>The art world is undergoing a revolutionary transformation through blockchain technology and NFTs (Non-Fungible Tokens). This digital revolution is not just changing how we buy and sell art—it's democratizing art ownership and creating new opportunities for supporting regenerative communities.</p>

      <h2>Democratizing Art Ownership</h2>
      <p>Traditionally, art ownership has been limited to a select few—wealthy collectors, institutions, and investors. NFTs are breaking down these barriers by making art ownership more accessible and transparent. Through fractional ownership and lower entry barriers, more people can now participate in the art market.</p>

      <h2>Supporting Regenerative Communities</h2>
      <p>What sets our platform apart is our commitment to channeling art market resources into regenerative projects. Unlike traditional art markets where value often remains concentrated among a few players, our model ensures that:</p>
      <ul>
        <li>50% of sales directly support artists, ensuring fair compensation for their work</li>
        <li>The remaining 50% funds platform development and, crucially, supports art residencies in regenerative communities</li>
        <li>Each transaction contributes to building sustainable, artist-centered communities</li>
      </ul>

      <h2>Technical Innovation Meets Social Impact</h2>
      <p>Our platform provides comprehensive technical support to artists, helping them navigate the complexities of NFT creation and blockchain technology. This technical assistance ensures that artists can focus on their creative work while benefiting from new digital opportunities.</p>

      <h2>Looking Forward</h2>
      <p>As we continue to develop our platform, we're excited about the possibilities that lie ahead. The combination of NFT technology and regenerative principles creates a powerful framework for positive change in both the art world and broader society.</p>
    `,
	},
	"beyond-tax-havens": {
		title: "Beyond Tax Havens: Art as a Force for Good",
		date: "2024-03-18",
		category: "Investment",
		content: `
      <p>For too long, the art market has been associated with tax avoidance and wealth preservation. We're pioneering a new approach that transforms art investment into a force for positive change.</p>

      <h2>The Traditional Model</h2>
      <p>Historically, high-value art has served as a convenient vehicle for tax optimization and wealth storage. This practice has contributed to:</p>
      <ul>
        <li>Art being locked away in freeports and private vaults</li>
        <li>Limited public access to significant works</li>
        <li>Artificial market manipulation</li>
      </ul>

      <h2>A New Paradigm</h2>
      <p>Our platform introduces a transparent, community-focused investment model where:</p>
      <ul>
        <li>Investment returns are tied to real community impact</li>
        <li>Art remains accessible through digital ownership</li>
        <li>Value creation benefits multiple stakeholders</li>
      </ul>

      <h2>Sustainable Returns</h2>
      <p>We're demonstrating that financial returns and positive impact aren't mutually exclusive. By investing in regenerative communities and supporting artists directly, we're creating sustainable value that benefits everyone involved.</p>

      <h2>The Future of Art Investment</h2>
      <p>As we move forward, we envision a world where art investment naturally aligns with environmental and social good. This isn't just idealistic thinking—it's a practical response to growing demand for sustainable and ethical investment opportunities.</p>
    `,
	},
	"future-of-art-residencies": {
		title: "The Future of Art Residencies",
		date: "2024-03-15",
		category: "Community",
		content: `
      <p>Art residencies are being reimagined as catalysts for regenerative community development. Our vision combines creative space with sustainable living practices.</p>

      <h2>Reimagining Creative Spaces</h2>
      <p>Traditional art residencies often exist in isolation from their surrounding communities. Our model integrates:</p>
      <ul>
        <li>Sustainable building practices</li>
        <li>Community engagement</li>
        <li>Local resource utilization</li>
      </ul>

      <h2>The Galicia Project</h2>
      <p>Our flagship residency in Galicia serves as a prototype for future developments. Key features include:</p>
      <ul>
        <li>Solar-powered studios</li>
        <li>Community gardens</li>
        <li>Collaborative workspaces</li>
        <li>Local community integration</li>
      </ul>

      <h2>Artist Support System</h2>
      <p>Residents receive comprehensive support including:</p>
      <ul>
        <li>Technical guidance for NFT creation</li>
        <li>Sustainable living practices education</li>
        <li>Community engagement opportunities</li>
      </ul>

      <h2>Scaling the Model</h2>
      <p>As we prove the success of our Galicia residency, we plan to expand this model to other locations, creating a network of regenerative art communities worldwide.</p>
    `,
	},
	"arts-role-in-environmental-regeneration": {
		title: "Art's Role in Environmental Regeneration",
		date: "2024-03-12",
		category: "Environment",
		content: `
      <p>Art has always reflected our relationship with nature. Today, it's becoming an active force in environmental regeneration.</p>

      <h2>Creative Expression as Environmental Action</h2>
      <p>Artists in our collective are:</p>
      <ul>
        <li>Creating works that highlight environmental challenges</li>
        <li>Using sustainable materials and practices</li>
        <li>Engaging communities in ecological restoration</li>
      </ul>

      <h2>NFTs and Environmental Impact</h2>
      <p>We're addressing the environmental concerns of NFTs through:</p>
      <ul>
        <li>Energy-efficient blockchain solutions</li>
        <li>Carbon offset programs</li>
        <li>Sustainable platform practices</li>
      </ul>

      <h2>Community Impact</h2>
      <p>Our projects demonstrate how art can:</p>
      <ul>
        <li>Inspire environmental awareness</li>
        <li>Fund restoration projects</li>
        <li>Build sustainable communities</li>
      </ul>

      <h2>Looking Forward</h2>
      <p>The future of environmental art lies in active participation in regeneration. Through our platform, we're making this future a reality.</p>
    `,
	},
};

export default function BlogPost({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = use(params);
	const post = blogPosts[slug as keyof typeof blogPosts];

	if (!post) {
		notFound();
	}

	return (
		<div className="container mx-auto px-4 py-16">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Link href="/blog">
					<Button variant="ghost" className="mb-8 group">
						<ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
						Back to Blog
					</Button>
				</Link>

				<div className="max-w-3xl mx-auto">
					<div className="mb-8">
						<div className="flex items-center gap-4 mb-4">
							<span className="text-sm text-primary">
								{post.category}
							</span>
							<span className="text-sm text-muted-foreground">
								{post.date}
							</span>
						</div>
						<h1 className="text-4xl font-bold mb-8">
							{post.title}
						</h1>
					</div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						className="prose dark:prose-invert max-w-none"
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>
				</div>
			</motion.div>
		</div>
	);
}
