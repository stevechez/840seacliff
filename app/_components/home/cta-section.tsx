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
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left Column: The Pitch */}
					<div className="space-y-4">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							Your Future Awaits
						</h2>
						<p className="text-lg text-muted-foreground max-w-prose">
							This is more than a house; it&quot;s an opportunity to own a
							landmark property. Don&quot;t miss the chance to experience it in
							person. Schedule a private and confidential viewing today.
						</p>
						<div className="flex items-center gap-4 pt-4">
							<Image
								src="/agent-photo.jpg" // Add a professional photo of the agent
								alt="Listing Agent"
								width={80}
								height={80}
								className="rounded-full"
							/>
							<div>
								<p className="font-semibold text-lg">Jane Doe</p>
								<p className="text-muted-foreground">
									Lead Listing Agent, Prestige Realty
								</p>
							</div>
						</div>
					</div>

					{/* Right Column: The Form */}
					<div>
						<Card className="w-full max-w-md mx-auto lg:mx-0">
							<CardHeader>
								<CardTitle>Schedule a Viewing</CardTitle>
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
