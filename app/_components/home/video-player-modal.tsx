// app/_components/home/video-player-modal.tsx
'use client';

import { Dialog, DialogTitle, DialogContent } from '@/components/ui/dialog';

interface VideoPlayerModalProps {
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
	videoId: string;
}

export function VideoPlayerModal({
	isOpen,
	setIsOpen,
	videoId,
}: VideoPlayerModalProps) {
	// We construct the URL with autoplay=1 to make the video play immediately when the modal opens.
	const videoUrl = `https://www.youtube.com/embed/UThBbhd_Elw?autoplay=1&rel=0`;

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTitle className="sr-only" />
			<DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
				{/* The aspect-video class is a Tailwind trick to maintain a 16:9 ratio */}
				<div className="aspect-video">
					<iframe
						src={videoUrl}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full h-full"
					></iframe>
				</div>
			</DialogContent>
		</Dialog>
	);
}
