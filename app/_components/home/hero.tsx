'use client';

import Image from 'next/image';
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

			{/* Content Container is unchanged */}
			<div className="relative z-10 flex flex-col h-full items-start justify-end p-8 sm:p-12 lg:p-24">
				{/* ... (all the motion.div content remains the same) */}
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
