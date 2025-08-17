export function PropertyJsonLd() {
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'SingleFamilyResidence',
		name: '840 Seacliff Drive',
		address: {
			'@type': 'PostalAddress',
			streetAddress: '840 Seacliff Drive',
			addressLocality: 'Aptos',
			addressRegion: 'CA',
			postalCode: '95003',
			addressCountry: 'US',
		},
		image: '/images/840seacliff.jpg',
		description:
			'Offering the best of both worlds, this Seacliff retreat is tucked away on a quiet cul-de-sac, just a short stroll from one of the neighborhoods most scenic beach paths.',
		numberOfRooms: '3',
		floorSize: {
			'@type': 'QuantitativeValue',
			value: '2144',
			unitCode: 'SQF',
		},
		offers: {
			'@type': 'Offer',
			price: '1449000',
			priceCurrency: 'USD',
			availability: 'https://schema.org/InStock',
			url: 'https://840seacliff.vercel.com/',
		},
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
		/>
	);
}
