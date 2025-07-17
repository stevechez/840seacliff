import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { PropertyJsonLd } from './_components/global/json-ld';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Luxury Estate for Sale | 123 Luxury Lane, Beverly Hills, CA',
	description:
		'Explore the architectural masterpiece at 123 Luxury Lane. A modern estate with 5 beds, 7 baths, and breathtaking canyon views.',
	openGraph: {
		title: 'Luxury Estate for Sale | 123 Luxury Lane, Beverly Hills, CA',
		description:
			'A modern estate with 5 beds, 7 baths, and breathtaking canyon views.',
		images: [
			{
				url: 'https://www.yourdomain.com/property-images/og-image.jpg', // A stunning hero shot
				width: 1200,
				height: 630,
				alt: 'Exterior view of the luxury estate at 123 Luxury Lane',
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
			<PropertyJsonLd />
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
