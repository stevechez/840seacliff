import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Or your chosen font
import { Toaster } from '@/components/ui/sonner'; // Assuming you use Sonner for notifications
import './globals.css';

// Import your central data source for SEO
import { propertyData } from './data/property-data';
// Import the component that renders the JSON-LD script
import { PropertyJsonLd } from './_components/global/json-ld';

const inter = Inter({ subsets: ['latin'] });

// --- DYNAMIC METADATA ---
// This generates the page title, description, and social media card
// using the data from your single source of truth.
export const metadata: Metadata = {
	title: propertyData.meta.title,
	description: propertyData.meta.description,
	openGraph: {
		title: propertyData.meta.title,
		description: propertyData.meta.description,
		images: [
			{
				// Remember to use an absolute URL for Open Graph images
				url: `https://840seacliff.vercel.app${propertyData.meta.ogImage}`,
				width: 1200,
				height: 630,
				alt: 'Stunning exterior view of the luxury property',
			},
		],
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			{/* 
        This is the correct placement. The <head> tag contains metadata
        and scripts that are not visible on the page. Next.js will
        automatically merge the content from the 'metadata' object
        with any elements you manually place here.
      */}
			<head>
				<PropertyJsonLd />
			</head>

			{/* The <body> contains the visible content of your page */}
			<body
				className={`${inter.className} bg-background text-foreground antialiased`}
			>
				{children}
				<Toaster /> {/* Place your notification Toaster here */}
			</body>
		</html>
	);
}
