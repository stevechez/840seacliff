import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
	videoSrc: string;
	fallbackImageSrc: string;
	address: string;
	price: string;
}

export function Hero({
	videoSrc,
	fallbackImageSrc,
	address,
	price,
}: HeroProps) {
	return (
		<div className="relative h-screen w-full overflow-hidden">
			{/* Background Video */}
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute top-0 left-0 w-full h-full object-cover -z-10"
				// Show video on larger screens, use poster image as fallback on smaller screens
				// This is a simple media query approach via CSS.
				// You can also use a React hook to conditionally render the video vs. an Image tag.
				poster={fallbackImageSrc}
			>
				<source src={videoSrc} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			{/* Overlay */}
			<div className="absolute top-0 left-0 w-full h-full bg-black/50" />

			{/* Content */}
			<div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4">
				<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-shadow-lg">
					{address}
				</h1>
				<p className="mt-4 text-2xl md:text-4xl font-light text-shadow">
					{price}
				</p>
				<div className="mt-8 flex gap-4">
					<Button size="lg" variant="secondary">
						View Gallery
					</Button>
					<Button size="lg">Schedule a Tour</Button>
				</div>
			</div>

			{/* Scroll Down Hint */}
			<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white">
				<ArrowDown className="h-8 w-8 animate-bounce" />
			</div>
		</div>
	);
}

// Add this to your globals.css for the text-shadow effect
// .text-shadow { text-shadow: 0px 2px 4px rgba(0,0,0,0.4); }
// .text-shadow-lg { text-shadow: 0px 4px 8px rgba(0,0,0,0.5); }
