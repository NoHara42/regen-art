import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const artworks = [
  {
    title: "Digital Forest Dreams",
    artist: "Elena Rivera",
    price: "2.5 ETH",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4"
  },
  {
    title: "Sustainable Futures",
    artist: "Marcus Chen",
    price: "1.8 ETH",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
  },
  {
    title: "Nature's Resilience",
    artist: "Sofia Patel",
    price: "3.2 ETH",
    image: "https://images.unsplash.com/photo-1637858868799-7f26a0640eb6"
  },
  {
    title: "Regenerative Harmony",
    artist: "Lucas Schmidt",
    price: "2.0 ETH",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
  }
]

export default function ArtPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Featured Artworks</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover unique NFT artworks that support both artists and regenerative communities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {artworks.map((artwork) => (
          <Card key={artwork.title} className="overflow-hidden">
            <CardHeader>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  className="object-cover"
                />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2">{artwork.title}</CardTitle>
              <p className="text-sm text-muted-foreground">by {artwork.artist}</p>
              <p className="text-lg font-bold mt-2">{artwork.price}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Collect Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}