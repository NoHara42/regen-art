"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Link from "next/link"

const posts = [
  {
    slug: "reshaping-art-world-through-nfts",
    title: "Reshaping the Art World Through NFTs",
    excerpt: "How blockchain technology and NFTs are democratizing art ownership and supporting regenerative communities.",
    date: "2024-03-20",
    readTime: "5 min read",
    category: "Technology"
  },
  {
    slug: "beyond-tax-havens",
    title: "Beyond Tax Havens: Art as a Force for Good",
    excerpt: "Moving away from traditional art investment models towards sustainable, community-focused approaches.",
    date: "2024-03-18",
    readTime: "7 min read",
    category: "Investment"
  },
  {
    slug: "future-of-art-residencies",
    title: "The Future of Art Residencies",
    excerpt: "Creating spaces where artists can thrive while contributing to regenerative communities.",
    date: "2024-03-15",
    readTime: "6 min read",
    category: "Community"
  },
  {
    slug: "arts-role-in-environmental-regeneration",
    title: "Art's Role in Environmental Regeneration",
    excerpt: "How creative expression can drive positive change and support ecological restoration.",
    date: "2024-03-12",
    readTime: "4 min read",
    category: "Environment"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
          Insights & Perspectives
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Exploring the intersection of art, technology, and regenerative practices.
          Join us in reimagining the future of art investment and community impact.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 gap-6"
      >
        {posts.map((post) => (
          <motion.div key={post.title} variants={item}>
            <Link href={`/blog/${post.slug}`} className="block group">
              <Card className="h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-primary">{post.category}</span>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}