import { Button } from '@/components/ui/button';
// import { Separator } from '@/components/ui/separator';
// import { Separator } from '../../components/ui/separator';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-background border-t">
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
					{/* Branding/Agent Info */}
					<div>
						<h3 className="font-bold text-lg">Prestige Realty</h3>
						<p className="text-sm text-muted-foreground">
							Representing California&quot;s Finest Properties
						</p>
						<p className="text-sm text-muted-foreground mt-2">DRE #01234567</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-semibold">Quick Links</h4>
						<ul className="mt-2 space-y-1">
							<li>
								<Link
									href="#details"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									Property Details
								</Link>
							</li>
							<li>
								<Link
									href="#gallery"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									Image Gallery
								</Link>
							</li>
							<li>
								<Link
									href="#contact"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									Schedule Tour
								</Link>
							</li>
						</ul>
					</div>

					{/* Social Media */}
					<div>
						<h4 className="font-semibold">Follow Us</h4>
						<div className="flex justify-center md:justify-start gap-2 mt-2">
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
					</div>
				</div>

				{/* <Separator className="my-8" /> */}

				<div className="text-center text-sm text-muted-foreground">
					<p>© {currentYear} Prestige Realty. All Rights Reserved.</p>
					<p className="mt-1">
						Site designed and developed for demonstration purposes. All media is
						for placement only.
					</p>
				</div>
			</div>
		</footer>
	);
}
