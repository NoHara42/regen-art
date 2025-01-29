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
	"artist-support-technical-guidance": {
		title: "Artist Support: Technical Guidance for NFT Creation",
		date: "2024-04-01",
		category: "Technology",
		content: `
      <p>In the rapidly evolving world of digital art, technical barriers can often prevent talented artists from exploring new mediums. Our platform is committed to breaking down these barriers through comprehensive technical support.</p>

      <h2>Understanding the NFT Landscape</h2>
      <p>Non-Fungible Tokens (NFTs) represent a revolutionary way for artists to monetize and distribute their work. However, the technical complexity can be overwhelming. We provide end-to-end support to make this process seamless:</p>
      <ul>
        <li>Blockchain technology education</li>
        <li>Step-by-step minting guidance</li>
        <li>Platform navigation assistance</li>
        <li>Smart contract understanding</li>
      </ul>

      <h2>Personalized Technical Workshops</h2>
      <p>Our support goes beyond generic tutorials. We offer:</p>
      <ul>
        <li>One-on-one consultation sessions</li>
        <li>Technical skill development workshops</li>
        <li>Digital portfolio optimization</li>
        <li>Marketing strategies for digital art</li>
      </ul>

      <h2>Lowering Entry Barriers</h2>
      <p>We believe that technical complexity should never prevent artistic expression. Our support aims to:</p>
      <ul>
        <li>Demystify blockchain and NFT technologies</li>
        <li>Provide accessible, jargon-free guidance</li>
        <li>Empower artists to take control of their digital presence</li>
        <li>Create a supportive, learning-focused community</li>
      </ul>

      <h2>Continuous Learning</h2>
      <p>The digital art world evolves rapidly. We're committed to continuous learning, regularly updating our support resources and providing artists with the latest tools and knowledge.</p>

      <h2>Beyond Technical Support</h2>
      <p>Our technical guidance is just the beginning. We're building an ecosystem that supports artists holistically—technically, creatively, and financially.</p>
    `,
	},
	"fair-revenue-model": {
		title: "Fair Revenue: Redefining Artist Compensation",
		date: "2024-04-02",
		category: "Economics",
		content: `
      <p>Traditional art markets have long been criticized for their opaque and often unfair revenue distribution. We're pioneering a transparent, equitable model that puts artists at the center of value creation.</p>

      <h2>The 50/50 Revenue Split</h2>
      <p>Our revolutionary revenue model ensures that:</p>
      <ul>
        <li>50% of every sale goes directly to the artist</li>
        <li>The remaining 50% supports platform growth and regenerative initiatives</li>
        <li>Transparent, blockchain-verified transactions</li>
        <li>No hidden fees or complex commission structures</li>
      </ul>

      <h2>Breaking Traditional Barriers</h2>
      <p>Conventional art markets often leave artists with minimal compensation. Our approach challenges this by:</p>
      <ul>
        <li>Eliminating intermediaries</li>
        <li>Providing direct artist-to-collector connections</li>
        <li>Ensuring fair, immediate compensation</li>
        <li>Creating long-term value for artists</li>
      </ul>

      <h2>Reinvesting in the Ecosystem</h2>
      <p>The 50% allocated to platform growth isn't just about business expansion. It directly supports:</p>
      <ul>
        <li>Art residency programs</li>
        <li>Technical support for artists</li>
        <li>Community development initiatives</li>
        <li>Sustainable art infrastructure</li>
      </ul>

      <h2>Empowering Emerging Artists</h2>
      <p>Beyond immediate financial compensation, our model provides:</p>
      <ul>
        <li>Global visibility</li>
        <li>Professional development resources</li>
        <li>Networking opportunities</li>
        <li>Long-term career support</li>
      </ul>

      <h2>A Sustainable Future</h2>
      <p>Our fair revenue model is more than a financial strategy—it's a commitment to creating a more equitable, transparent, and artist-centric art ecosystem.</p>
    `,
	},
	"regenerative-focus-sustainable-art": {
		title: "Regenerative Focus: Art as a Catalyst for Sustainable Change",
		date: "2024-04-03",
		category: "Sustainability",
		content: `
      <p>Art has always been a powerful medium for communication and change. We're taking this potential further by embedding regenerative principles at the core of our platform.</p>

      <h2>What is Regenerative Art?</h2>
      <p>Regenerative art goes beyond mere representation—it actively contributes to ecological and social restoration. Our approach involves:</p>
      <ul>
        <li>Creating art that highlights environmental challenges</li>
        <li>Supporting artists working with sustainable practices</li>
        <li>Funding community regeneration projects</li>
        <li>Promoting ecological awareness through creativity</li>
      </ul>

      <h2>Sustainable Art Practices</h2>
      <p>We support artists in adopting regenerative practices:</p>
      <ul>
        <li>Using eco-friendly and recycled materials</li>
        <li>Minimizing carbon footprint in art creation</li>
        <li>Documenting and sharing sustainable techniques</li>
        <li>Creating art that tells stories of environmental restoration</li>
      </ul>

      <h2>Community and Ecosystem Restoration</h2>
      <p>Our regenerative focus extends beyond individual art pieces to broader impact:</p>
      <ul>
        <li>Funding local ecosystem restoration projects</li>
        <li>Supporting indigenous art and knowledge systems</li>
        <li>Creating art residencies in ecologically sensitive areas</li>
        <li>Developing educational programs on regeneration</li>
      </ul>

      <h2>Blockchain and Sustainability</h2>
      <p>We're addressing the environmental concerns of blockchain technology by:</p>
      <ul>
        <li>Using energy-efficient blockchain networks</li>
        <li>Implementing carbon offset programs</li>
        <li>Transparent reporting of our environmental impact</li>
        <li>Continuously improving our technological infrastructure</li>
      </ul>

      <h2>A Holistic Vision</h2>
      <p>Regenerative art is about creating systems that are not just sustainable, but actively healing. Through our platform, we're demonstrating that art can be a powerful tool for positive ecological and social transformation.</p>
    `,
	},
	"community-collective-impact": {
		title: "Community: Collective Impact in the Art World",
		date: "2024-04-04",
		category: "Community",
		content: `
      <p>In an increasingly digital and fragmented world, we believe in the power of community—not just as a network, but as a transformative force for artistic and social change.</p>

      <h2>Redefining Artistic Community</h2>
      <p>Our community is more than a group of individuals. It's a collaborative ecosystem that:</p>
      <ul>
        <li>Breaks down traditional art world hierarchies</li>
        <li>Provides mutual support and learning</li>
        <li>Amplifies marginalized voices</li>
        <li>Creates opportunities for collective action</li>
      </ul>

      <h2>Digital and Physical Connections</h2>
      <p>We bridge digital platforms with real-world interactions:</p>
      <ul>
        <li>Online forums and collaboration spaces</li>
        <li>Physical art residencies and workshops</li>
        <li>Global networking events</li>
        <li>Cross-cultural artistic exchanges</li>
      </ul>

      <h2>Collective Learning and Growth</h2>
      <p>Community members benefit from shared knowledge and resources:</p>
      <ul>
        <li>Technical workshops on NFT creation</li>
        <li>Sustainability and regenerative practice training</li>
        <li>Mentorship programs</li>
        <li>Collaborative art projects</li>
      </ul>

      <h2>Economic Empowerment</h2>
      <p>Our community model provides economic opportunities through:</p>
      <ul>
        <li>Fair revenue sharing</li>
        <li>Collective marketing efforts</li>
        <li>Shared resources and infrastructure</li>
        <li>Mutual financial support mechanisms</li>
      </ul>

      <h2>Beyond Art: Social Impact</h2>
      <p>We see our community as a catalyst for broader social change, using art as a medium to:</p>
      <ul>
        <li>Raise awareness about critical issues</li>
        <li>Support regenerative communities</li>
        <li>Challenge existing social structures</li>
        <li>Inspire collective action</li>
      </ul>

      <h2>A Living, Evolving Ecosystem</h2>
      <p>Our community is not static—it's a dynamic, evolving ecosystem of creativity, learning, and collective transformation.</p>
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
