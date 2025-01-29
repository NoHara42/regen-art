import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Home, Trees as Tree, Users } from "lucide-react";

export default function RegenerationPage() {
	return (
		<div className="container mx-auto px-4 py-16">
			<div className="text-center mb-16">
				<h1 className="text-4xl font-bold mb-6">
					Regenerative Projects
				</h1>
				<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
					Discover how we&apos;re using art to support and create
					regenerative communities, starting with our flagship project
					in Galicia.
				</p>
			</div>

			<div className="grid md:grid-cols-2 gap-8 mb-16">
				<Card>
					<CardHeader>
						<div className="flex items-center gap-4">
							<Home className="h-8 w-8 text-primary" />
							<CardTitle>Galicia Art Residency</CardTitle>
						</div>
					</CardHeader>
					<CardContent>
						<p className="text-muted-foreground">
							Our first regenerative community project in Galicia
							aims to create an artist residency program
							integrated with sustainable living practices. The
							space will serve as a hub for artists to create,
							learn, and contribute to the local ecosystem.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<div className="flex items-center gap-4">
							<Tree className="h-8 w-8 text-primary" />
							<CardTitle>Environmental Impact</CardTitle>
						</div>
					</CardHeader>
					<CardContent>
						<p className="text-muted-foreground">
							The Galicia project incorporates permaculture
							principles, renewable energy, and sustainable
							building practices. We&apos;re working to create a
							model that demonstrates how art and environmental
							stewardship can coexist and thrive.
						</p>
					</CardContent>
				</Card>
			</div>

			<div className="bg-muted rounded-lg p-8 mt-16">
				<h2 className="text-2xl font-bold mb-6 text-center">
					Our Vision
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="flex flex-col items-center text-center">
						<Leaf className="h-12 w-12 text-primary mb-4" />
						<h3 className="text-xl font-semibold mb-2">
							Sustainable Living
						</h3>
						<p className="text-muted-foreground">
							Creating spaces that demonstrate how sustainable
							living can be beautiful, practical, and enriching.
						</p>
					</div>
					<div className="flex flex-col items-center text-center">
						<Users className="h-12 w-12 text-primary mb-4" />
						<h3 className="text-xl font-semibold mb-2">
							Community Building
						</h3>
						<p className="text-muted-foreground">
							Fostering connections between artists, local
							communities, and environmental initiatives.
						</p>
					</div>
					<div className="flex flex-col items-center text-center">
						<Tree className="h-12 w-12 text-primary mb-4" />
						<h3 className="text-xl font-semibold mb-2">
							Environmental Restoration
						</h3>
						<p className="text-muted-foreground">
							Actively contributing to the restoration and
							preservation of local ecosystems through art and
							community action.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
