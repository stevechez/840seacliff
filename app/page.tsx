import { Navbar } from '@/app/_components/global/navbar';
import { Hero } from '@/app/_components/home/hero';
import { PropertyHighlights } from '@/app/_components/home/property-highlights';
import { VideoSection } from '@/app/_components/home/video-section';
import { ImageGallery } from '@/app/_components/home/image-gallery';
import { PropertyDetails } from '@/app/_components/home/property-details';
import { CtaSection } from '@/app/_components/home/cta-section';
import { Footer } from '@/app/_components/global/footer';
import { Separator } from '@radix-ui/react-separator';

const propertyData = {
	address: '840 Sealiff Drive, Aptos, CA 95003',
	price: '$1,449,000',
	bedrooms: 3,
	bathrooms: 3,
	sqft: '2144',
	description:
		'Offering the best of both worlds, this Seacliff retreat is tucked away on a quiet cul-de-sac, just a short stroll from one of the neighborhoods most scenic beach paths.',
	details: {
		description:
			'Offering the best of both worlds, this Seacliff retreat is tucked away on a quiet cul-de-sac, just a short stroll from one of the neighborhoods most scenic beach paths.',
		specs: {
			bedrooms: 3,
			bathrooms: 3,
			sqft: '2144',
		},
	},
	fallbackImageSrc: '/images/840seacliff.jpg',
	videoSrc: 'https://youtu.be/UThBbhd_Elw',
};

export default function HomePage() {
	return (
		<main className="bg-background text-foreground">
			{/* Each component receives the data it needs from our central object */}
			<Navbar propertyAddress={propertyData.address} />
			<Hero
				// The Hero component now accepts ONE prop for the image, called 'imageSrc'.
				imageSrc={propertyData.fallbackImageSrc}
				// These props are correct and should remain.
				address={propertyData.address}
				price={propertyData.price}
			/>
			<PropertyHighlights />
			<ImageGallery />
			<VideoSection />
			<PropertyDetails
			// description={propertyData.details.description}
			// specs={propertyData.details.specs}
			/>
			<CtaSection />
			<Footer />
		</main>
	);
}
