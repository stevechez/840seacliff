'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown, MapPin } from 'lucide-react';
// Import the 'motion' component and the 'Variants' type
import { motion, Variants } from 'framer-motion';

interface HeroProps {
	imageSrc: string; // The ONLY image-related prop it needs
	address: string;
	price: string;
}

// --- CHANGES START HERE ---

// Explicitly type the constant with the 'Variants' type from Framer Motion
const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

// Do the same for the item variants
const itemVariants: Variants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
};

// --- CHANGES END HERE ---

export function Hero({
	imageSrc = '/fallback-image.jpg',
	address,
	price,
}: HeroProps) {
	return (
		<div className="relative h-screen w-full overflow-hidden">
			{/* Background Image using the 'imageSrc' prop */}
			<Image
				src={imageSrc ?? '/fallback-image.jpg'} // Use fallback if imageSrc is undefined
				alt="View of the luxury property"
				fill
				className="object-cover"
				priority
			/>

			{/* --- MODIFIED GRADIENT OVERLAY --- */}
			{/* We add a gradient from the top down to darken the area behind the navbar */}
			<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />

			{/* We keep the original gradient from the bottom up for the text at the bottom */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

			<div className="relative z-10 flex flex-col h-full items-start justify-end p-8 sm:p-12 lg:p-24">
				<motion.div
					className="max-w-3xl text-white"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{/* Address with Icon */}
					<motion.div
						variants={itemVariants}
						className="flex items-center gap-2 mb-2"
					>
						<Link
							href="https://maps.app.goo.gl/tmRfxXthasRdA4Qr6"
							target="_blank" // Opens in a new tab
							rel="noopener noreferrer" // Security best practice for target="_blank"
							className="inline-flex"
							aria-label={`View ${address} on Google Maps`} // Good for accessibility
						>
							{/* <svg
								className="w-5 h-5 mr-2"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
									clipRule="evenodd"
								></path>
							</svg> */}
							<MapPin className="h-5 w-5 text-white/80" />
						</Link>
						{/* <MapPin className="h-5 w-5 text-white/80" /> */}
						<p className="text-2xl font-medium text-white/80">{address}</p>
					</motion.div>

					{/* Main Title / Tagline */}
					<motion.h1
						variants={itemVariants}
						className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-shadow-lg"
					>
						<div className="text-blue-100">Your Seacliff Escape</div>

						<div className="text-2xl tracking-normal">
							Coastal Charm, Private Paradise
						</div>
					</motion.h1>

					{/* Price */}
					<motion.p
						variants={itemVariants}
						className="mt-4 text-2xl md:text-4xl font-light text-shadow"
					>
						Offered at {price}
					</motion.p>

					{/* Buttons */}
					<motion.div
						variants={itemVariants}
						className="mt-8 flex flex-wrap gap-4"
					>
						<Button
							size="lg"
							asChild
							className=" text-white hover:bg-blue-700 font-semibold text-xl"
						>
							<a href="#contact">Inquire Now</a>
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="bg-transparent text-white border-white hover:bg-white hover:text-black font-semibold text-xl"
						>
							<a href="#gallery">View Gallery</a>
						</Button>
					</motion.div>
				</motion.div>
			</div>

			{/* Animated Scroll Down Hint */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.5, duration: 0.5 }}
				className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white"
			>
				<ArrowDown className="h-8 w-8 animate-bounce" />
			</motion.div>
		</div>
	);
}
