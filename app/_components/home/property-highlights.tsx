import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BedDouble, Bath, Square, ChefHat } from 'lucide-react';

const features = [
	{
		icon: <BedDouble className="h-8 w-8 text-primary" />,
		title: '3 Bedrooms',
		description: 'Every bedroom is spacious.',
	},
	{
		icon: <Bath className="h-8 w-8 text-primary" />,
		title: '2.5 Bathrooms',
		description: 'Modern fixtures and spa-like master bath.',
	},
	{
		icon: <Square className="h-8 w-8 text-primary" />,
		title: '2,144 Sq. Ft.',
		description: 'Expansive open-plan living spaces.',
	},
	{
		icon: <ChefHat className="h-8 w-8 text-primary" />,
		title: 'Updated Kitchen',
		description: 'New appliances and quartz countertops.',
	},
];

export function PropertyHighlights() {
	return (
		<section className="py-12 sm:py-12 bg-secondary/50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						The Seacliff Sweet Spot
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						Where Ocean Whispers Meet Tranquil Living.
					</p>
				</div>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{features.map((feature, index) => (
						<Card
							key={index}
							className="text-center border-2 hover:border-primary transition-colors duration-300"
						>
							<CardHeader>
								<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
									{feature.icon}
								</div>
								<CardTitle>{feature.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">{feature.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
