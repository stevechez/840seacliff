import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-background border-t px-6">
			<div className="container mx-auto px-4 py-12 sm:py-16">
				{/* Main Flex Container */}
				<div className="flex flex-col md:flex-row md:justify-between gap-10">
					{/* LEFT SIDE: Branding and Info */}
					<div className="text-center md:text-left">
						<h3 className="font-bold text-lg">Chez Realty</h3>
						<p className="mt-2 text-sm text-muted-foreground max-w-md">
							Ready to explore your potential new home? We invite you to
							schedule a private and personalized viewing at your convenience.
						</p>
						<p className="text-sm text-muted-foreground mt-4">DRE #01234567</p>
					</div>

					{/* RIGHT SIDE: Social Media */}
					{/* <div className="text-center md:text-right mt-16 md:mt-0">
						<h4 className="font-semibold mb-2">Follow Us</h4>
						<div className="flex justify-center md:justify-end gap-2">
							<Button variant="ghost" size="icon" asChild>
								<a href="#" aria-label="Facebook">
									<Facebook className="h-5 w-5" />
								</a>
							</Button>
							<Button variant="ghost" size="icon" asChild>
								<a href="#" aria-label="Instagram">
									<Instagram className="h-5 w-5" />
								</a>
							</Button>
							<Button variant="ghost" size="icon" asChild>
								<a href="#" aria-label="Twitter">
									<Twitter className="h-5 w-5" />
								</a>
							</Button>
							<Button variant="ghost" size="icon" asChild>
								<a href="#" aria-label="LinkedIn">
									<Linkedin className="h-5 w-5" />
								</a>
							</Button>
						</div>
					</div> */}
				</div>

				{/* Separator and Copyright remain the same */}
				<Separator className="my-8" />
				<div className="text-center text-sm text-muted-foreground">
					<p>© {currentYear} All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
}
