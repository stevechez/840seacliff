import { Separator } from '@/components/ui/separator';

// This data would likely be part of your main propertyData object
const details = {
	description: `Offering the best of both worlds, this Seacliff retreat is tucked
away on a quiet cul-de-sac, just a short stroll from one of the neighborhoods most scenic beach paths. It's close enough to hear the ocean, yet far enough to forget the crowds. Inside, a spacious open layout and generously sized bedrooms create an effortless sense of comfort, while thoughtful, intentional updates throughout the kitchen and bathrooms bring a polished, cohesive feel. A reimagined front yard sets the tone, and out back, a private patio offers a peaceful space to relax, unwind, or entertain. This home offers the ideal lifestyle, whether you're looking for a family home or a weekend beach getaway.`,
	specs: [
		{ label: 'Bedrooms', value: '3' },
		{ label: 'Bathrooms', value: '2.5' },
		{ label: 'Year Built', value: '2001' },
		{ label: 'Home Size', value: '2,144 sq/ft' },
		{ label: 'Lot Size', value: '8,581 sq/ft' },
		{ label: 'Style', value: 'Contemporary Modern' },
		{ label: 'Dishwasher, Gas Oven/Range, Refrigerator, Washer/Dryer' },
		{ label: 'Parking', value: '2-Car Garage' },
		{ label: 'Cooling', value: 'Central, Multi-Zone' },
		{ label: 'Heating', value: 'Fireplace, Central' },
		{ label: 'Exterior', value: 'Large fenced yard' },
		{ label: 'HOA', value: 'none' },
	],
};

export function PropertyDetails() {
	return (
		<section id="details" className="py-0 sm:py-24 bg-background">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
					{/* Left Column: Description */}
					<div className="prose prose-slate max-w-none dark:prose-invert lg:prose-lg">
						<h2 className="text-lg font-bold tracking-tight sm:text-4xl mb-4">
							Your Best Seacliff Value.
						</h2>
						<p className="lead text-muted-foreground"></p>
						<p>{details.description}</p>
					</div>

					{/* Right Column: Specifications */}
					<div className="space-y-6">
						<h3 className="text-2xl font-semibold tracking-tight">
							Property Specifications
						</h3>
						<Separator />
						<ul className="space-y-4">
							{details.specs.map(spec => (
								<li
									key={spec.label}
									className="flex justify-between items-center pb-2 border-b border-dashed"
								>
									<span className="text-muted-foreground">{spec.label}</span>
									<span className="font-semibold text-foreground">
										{spec.value}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
