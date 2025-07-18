'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown, MapPin } from 'lucide-react';
// Import the 'motion' component and the 'Variants' type
import { motion, Variants } from 'framer-motion';

interface HeroProps {
	fallbackImageSrc: string;
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

export function Hero({ fallbackImageSrc, address, price }: HeroProps) {
	return (
		<div className="relative h-screen w-full overflow-hidden">
			{/* Background Image using next/image for optimization */}
			<Image
				src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop"
				alt="View of the luxury property"
				fill
				className="object-cover"
				priority
			/>

			{/* Sophisticated Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

			{/* Content Container */}
			<div className="relative z-10 flex flex-col h-full items-start justify-end p-8 sm:p-12 lg:p-24">
				<motion.div
					className="max-w-3xl text-white"
					variants={containerVariants} // This will now be type-safe
					initial="hidden"
					animate="visible"
				>
					{/* Address with Icon */}
					<motion.div
						variants={itemVariants}
						className="flex items-center gap-2 mb-2"
					>
						<MapPin className="h-5 w-5 text-white/80" />
						<p className="text-base font-medium text-white/80">{address}</p>
					</motion.div>

					{/* Main Title / Tagline */}
					<motion.h1
						variants={itemVariants} // This will now be type-safe
						className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-shadow-lg"
					>
						An Architectural Masterpiece
					</motion.h1>

					{/* Price */}
					<motion.p
						variants={itemVariants} // This will now be type-safe
						className="mt-4 text-2xl md:text-4xl font-light text-shadow"
					>
						Offered at {price}
					</motion.p>

					{/* Buttons */}
					<motion.div
						variants={itemVariants}
						className="mt-8 flex flex-wrap gap-4"
					>
						<Button size="lg" asChild>
							<a href="#contact">Schedule a Tour</a>
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="bg-transparent text-white border-white hover:bg-white hover:text-black"
						>
							View Gallery
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
