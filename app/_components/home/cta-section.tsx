import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { ContactForm } from './contact-form';
import Image from 'next/image';

export function CtaSection() {
	return (
		<section id="contact" className="py-16 sm:py-24 bg-secondary/50">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Left Column: The Pitch */}
					<div className="space-y-4">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-8">
							Experience Seacliff Living
						</h2>
						<p className="text-lg text-muted-foreground max-w-prose">
							This home offers a unique blend of comfort and coastal charm.
							Don&quot;t miss the chance to see it for yourself. Schedule your
							private viewing today.
						</p>
						<div className="flex items-center gap-4 pt-4">
							<Image
								src="/images/1520716170119.jpeg"
								alt="Steve Chez"
								width={70}
								height={70}
								className="rounded-full"
							/>
							<div>
								<p className="font-semibold text-lg">Steve Chez</p>
								<p className="text-muted-foreground">
									Listing Agent, Chez Realty
								</p>
							</div>
						</div>
					</div>

					{/* Right Column: The Form */}
					<div>
						<Card className="w-full max-w-md mx-auto lg:mx-0">
							<CardHeader>
								<CardTitle className="text-2xl mb-2">
									Schedule a Viewing
								</CardTitle>
								<CardDescription>
									Fill out the form below and we will contact you to arrange a
									private tour.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ContactForm />
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
