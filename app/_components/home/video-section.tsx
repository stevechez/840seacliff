// app/_components/home/video-section.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
import { VideoPlayerModal } from './video-player-modal';

// Your YouTube Video ID goes here
const YOUTUBE_VIDEO_ID = 'YOUR_YOUTUBE_VIDEO_ID_HERE'; // <-- IMPORTANT: REPLACE THIS

export function VideoSection() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<section className="py-8 sm:py-12 bg-secondary/50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							Beyond The Photos
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							The Seacliff Retreat in Motion.
						</p>
					</div>

					{/* The Video Facade */}
					<div
						className="relative rounded-lg overflow-hidden cursor-pointer group"
						onClick={() => setIsModalOpen(true)}
					>
						{/* High-quality thumbnail image */}
						<Image
							src="/images/840-thumbnail.jpg"
							alt="Cinematic tour of the property"
							width={1020}
							height={580}
							className="w-full h-auto"
						/>
						{/* Overlay to darken the image slightly */}
						<div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>

						{/* Big Play Button in the center */}
						<div className="absolute inset-0 flex items-center justify-center">
							<PlayCircle
								className="h-20 w-20 text-white/80 transform transition-transform duration-300 group-hover:scale-110"
								strokeWidth={1}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* The Modal itself. It's hidden by default. */}
			<VideoPlayerModal
				isOpen={isModalOpen}
				setIsOpen={setIsModalOpen}
				videoId={YOUTUBE_VIDEO_ID}
			/>
		</>
	);
}
