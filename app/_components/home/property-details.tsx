// import { Separator } from '@/components/ui/separator';

// This data would likely be part of your main propertyData object
const details = {
	description:
		"Nestled in the prestigious hills of Beverly, this newly constructed modern estate is a symphony of glass, stone, and wood. Designed for seamless indoor-outdoor living, every room offers panoramic views of the city and canyon. The grand entrance opens to a soaring 20-foot ceiling, leading to an expansive great room with a linear fireplace and automated Fleetwood glass doors that disappear, revealing an entertainer's paradise.",
	specs: [
		{ label: 'Year Built', value: '2023' },
		{ label: 'Lot Size', value: '0.75 Acres' },
		{ label: 'Architectural Style', value: 'Contemporary Modern' },
		{ label: 'HOA Fees', value: '$250/month' },
		{ label: 'Parking', value: '3-Car Garage' },
		{ label: 'Cooling', value: 'Central, Multi-Zone' },
		{ label: 'Heating', value: 'Radiant Floor Heating' },
		{ label: 'Exterior Material', value: 'Stucco, Stone, Ipe Wood' },
	],
};

export function PropertyDetails() {
	return (
		<section id="details" className="py-16 sm:py-24 bg-background">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
					{/* Left Column: Description */}
					<div className="prose prose-slate max-w-none dark:prose-invert lg:prose-lg">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							Unrivaled Craftsmanship
						</h2>
						<p className="lead text-muted-foreground">
							Every detail has been meticulously curated for a life of comfort
							and sophistication.
						</p>
						<p>{details.description}</p>
					</div>

					{/* Right Column: Specifications */}
					<div className="space-y-6">
						<h3 className="text-2xl font-semibold tracking-tight">
							Property Specifications
						</h3>
						{/* <Separator /> */}
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

// NOTE: For the `prose` classes to work well with Tailwind, you might need the official typography plugin:
// npm install -D @tailwindcss/typography
// Then add `require('@tailwindcss/typography')` to the plugins array in your `tailwind.config.ts`.
