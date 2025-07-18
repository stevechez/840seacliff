import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const images = [
	'/images/fronthouse.jpg',
	'/images/foyer.jpg',
	'/images/foyer2.jpg',
	'/images/kitchen.jpg',
	'/images/kitchen2.jpg',
	'/images/kitchen2.jpg',
	'/images/kitchen3.jpg',
	'/images/kitchen4.jpg',
	'/images/kitchen5.jpg',
	'/images/dining.jpg',
	'/images/dining2.jpg',
	'/images/dining3.jpg',
	'/images/livingroom.jpg',
	'/images/livingroom2.jpg',
	'/images/livingroom3.jpg',
	'/images/fireplace.jpg',
	'/images/hallway.jpg',
	'/images/masterbed.jpg',
	'/images/masterbed2.jpg',
	'/images/masterbath.jpg',
	'/images/masterbath2.jpg',
	'/images/tub.jpg',
	'/images/tub2.jpg',
	'/images/bedroom2.jpg',
	'/images/bedroom3.jpg',
];

export function ImageGallery() {
	return (
		<section id="gallery" className="py-4 sm:py-8">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Step Inside Your Coastal Dream
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						Every room, every detail – see yourself at home in Seacliff.{' '}
					</p>
				</div>

				<Carousel className="w-full" opts={{ loop: true }}>
					<CarouselContent>
						{images.map((src, index) => (
							<CarouselItem key={index}>
								<div className="p-1">
									<CardContent className="flex aspect-[16/9] items-center justify-center p-0 overflow-hidden rounded-lg">
										<Image
											src={src}
											alt={`Property Image ${index + 1}`}
											width={1280}
											height={720}
											className="w-full h-full object-cover"
										/>
									</CardContent>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="ml-16" />
					<CarouselNext className="mr-16" />
				</Carousel>
			</div>
		</section>
	);
}
