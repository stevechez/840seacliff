import { BedDouble, Bath, Square, ChefHat } from 'lucide-react';

export const propertyData = {
	// --- Basic Info ---
	address: '840 Seacliff Drive, Aptos, CA 95003',
	price: '$1,449,000',
	bedrooms: 3,
	bathrooms: 2.5,
	sqft: 2144,

	// --- Hero Section ---
	hero: {
		videoSrc: 'https://youtu.be/UThBbhd_Elw',
	},
	highlights: [
		{
			icon: BedDouble,
			title: '3 Bedrooms',
			description:
				'Spacious and serene, each with ensuite bathrooms and walk-in closets.',
		},
		{
			icon: Bath,
			title: '2.5 Bathrooms',
			description: 'Featuring modern fixtures and a spa-like master bath.',
		},
		{
			icon: Square,
			title: '2,155 Sq. Ft.',
			description: 'Expansive open-plan living.',
		},
		{
			icon: ChefHat,
			title: 'Updated Kitchen',
			description: 'New appliances and quartz countertops.',
		},
	],

	// --- Image Gallery Section ---
	// A list of all images to be displayed in the carousel.
	// Use high-resolution, landscape-oriented photos.
	galleryImages: [
		'/property-images/main-exterior.jpg',
		'/property-images/living-room.jpg',
		'/property-images/kitchen.jpg',
		'/property-images/master-bedroom.jpg',
		'/property-images/pool-area.jpg',
		'/property-images/home-office.jpg',
		'/property-images/bathroom.jpg',
		'/property-images/exterior-night.jpg',
	],

	// --- Property Details Section ---
	// The detailed description and list of specifications.
	details: {
		description:
			"Nestled in the prestigious hills of Beverly, this newly constructed modern estate is a symphony of glass, stone, and wood. Designed for seamless indoor-outdoor living, every room offers panoramic views of the city and canyon. The grand entrance opens to a soaring 20-foot ceiling, leading to an expansive great room with a linear fireplace and automated Fleetwood glass doors that disappear, revealing an entertainer's paradise.",
		specs: [
			{ label: 'Year Built', value: '2023' },
			{ label: 'Lot Size', value: '8,900 sqft' },
			{ label: 'Architectural Style', value: 'Contemporary Modern' },
			{ label: 'Parking', value: '2 Car Garage' },
			{ label: 'Heating', value: 'Central Heating' },
		],
	},

	// --- Agent & Contact Section ---
	// Information for the agent, used in the CTA and Footer.
	agent: {
		name: 'Steve Chez',
		title: 'Listing Agent, SM Realty',
		photoSrc: '/agent-photo.jpg',
		dre: 'DRE #01234567',
	},

	// --- SEO & Metadata ---
	// This data is used for the page title, description, and social media sharing cards.
	meta: {
		title: 'Aptos beach house | 840 Seacliff Drive, Aptos',
		description:
			'Live the Seacliff lifestyle! Find your dream home for sale on a quiet cul-de-sac, close to beaches. Enjoy updated comforts & private outdoor space. ',
		ogImage: '/property-images/og-image.jpg', // A specific, stunning image for social sharing (1200x630px recommended)
	},
} as const; // Using 'as const' makes this object readonly and provides stricter types.

// --- TypeScript Definitions ---
// These types are inferred from the data object itself, so they stay in sync automatically.
export type Feature = (typeof propertyData.highlights)[0];
export type Spec = (typeof propertyData.details.specs)[0];
