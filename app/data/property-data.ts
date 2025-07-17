import { ReactElement } from 'react';
import { BedDouble, Bath, Square, ChefHat } from 'lucide-react';

/**
 * =================================================================================
 * SINGLE SOURCE OF TRUTH
 * =================================================================================
 * All content, text, and data for the property is managed from this file.
 * This makes updating the website for a new property a matter of changing
 * the values in this object.
 */

export const propertyData = {
	// --- Basic Info ---
	address: '123 Luxury Lane, Beverly Hills, CA 90210',
	price: '$12,500,000',
	bedrooms: 5,
	bathrooms: 7,
	sqft: 6200,

	// --- Hero Section ---
	// The main video and fallback image for the top of the page.
	hero: {
		videoSrc: '/videos/hero-video.mp4',
		fallbackImageSrc: '/property-images/main-exterior.jpg',
	},

	// --- Property Highlights Section ---
	// The four main selling points featured below the hero.
	highlights: [
		{
			icon: BedDouble,
			title: '5 Bedrooms',
			description:
				'Spacious and serene, each with ensuite bathrooms and walk-in closets.',
		},
		{
			icon: Bath,
			title: '7 Bathrooms',
			description:
				'Featuring modern fixtures, Italian marble, and a spa-like master bath.',
		},
		{
			icon: Square,
			title: '6,200 Sq. Ft.',
			description:
				'Expansive open-plan living and entertaining spaces with soaring ceilings.',
		},
		{
			icon: ChefHat,
			title: 'Gourmet Kitchen',
			description:
				'Equipped with top-of-the-line appliances and a grand center island.',
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
			{ label: 'Lot Size', value: '0.75 Acres' },
			{ label: 'Architectural Style', value: 'Contemporary Modern' },
			{ label: 'HOA Fees', value: '$250/month' },
			{ label: 'Parking', value: '3-Car Climate-Controlled Garage' },
			{ label: 'Cooling', value: 'Central, Multi-Zone' },
			{ label: 'Heating', value: 'Radiant Floor Heating' },
			{ label: 'Exterior Material', value: 'Stucco, Stone, Ipe Wood Siding' },
		],
	},

	// --- Agent & Contact Section ---
	// Information for the agent, used in the CTA and Footer.
	agent: {
		name: 'Jane Doe',
		title: 'Lead Listing Agent, Prestige Realty',
		photoSrc: '/agent-photo.jpg',
		dre: 'DRE #01234567',
	},

	// --- SEO & Metadata ---
	// This data is used for the page title, description, and social media sharing cards.
	meta: {
		title: 'Luxury Estate for Sale | 123 Luxury Lane, Beverly Hills',
		description:
			'Explore an architectural masterpiece offering 5 beds, 7 baths, and breathtaking canyon views. Schedule your private tour today.',
		ogImage: '/property-images/og-image.jpg', // A specific, stunning image for social sharing (1200x630px recommended)
	},
} as const; // Using 'as const' makes this object readonly and provides stricter types.

// --- TypeScript Definitions ---
// These types are inferred from the data object itself, so they stay in sync automatically.
export type Feature = (typeof propertyData.highlights)[0];
export type Spec = (typeof propertyData.details.specs)[0];
