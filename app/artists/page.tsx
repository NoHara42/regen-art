import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const artists = [
	{
		name: "Joëlle Desarzens",
		bio: "An art generalist creating immersive experiences",
		specialty: "Art Education",
	},
	{
		name: "Ned O'Hara",
		bio: "Digital artist exploring the intersection of art and technology",
		specialty: "Digital Humanist",
	},
	{
		name: "?",
		bio: "This could be you.",
		specialty: "Join us!",
	},
];

export default function ArtistsPage() {
	return (
		<div className="container mx-auto px-4 py-16">
			<div className="text-center mb-16">
				<h1 className="text-4xl font-bold mb-6">Our Artists</h1>
				<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
					Meet the talented artists who are part of our collective,
					each bringing their unique perspective to regenerative art.
				</p>
			</div>

			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{artists.map((artist) => (
					<Card
						key={artist.name}
						className="overflow-hidden object-fill"
					>
						<CardHeader className="text-center">
							<Avatar className="h-24 w-24 mx-auto mb-4">
								<AvatarImage alt={artist.name} />
								<AvatarFallback>
									{artist.name
										.split(" ")
										.map((n) => n[0])
										.join("")}
								</AvatarFallback>
							</Avatar>
							<CardTitle>{artist.name}</CardTitle>
							<p className="text-sm text-primary">
								{artist.specialty}
							</p>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground text-center">
								{artist.bio}
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
