'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
// We only need the Menu icon from lucide-react now
import { Menu } from 'lucide-react';

interface NavbarProps {
	propertyAddress: string;
}

// Update your nav links to match the desired text
const navLinks = [
	{ href: '#gallery', label: 'GALLERY' },
	{ href: '#contact', label: 'SCHEDULE VIEWING' },
];

export function Navbar({ propertyAddress }: NavbarProps) {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const closeMobileMenu = () => setIsMobileMenuOpen(false);

	const navTextColor = isScrolled ? 'text-foreground' : 'text-white';

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
				isScrolled
					? 'bg-background/80 backdrop-blur-sm border-b border-border'
					: 'bg-transparent'
			}`}
		>
			<div className="container mx-auto flex h-20 items-center justify-between px-4 relative">
				{/* --- LEFT SIDE: Desktop Menu Trigger (NOW WITH HAMBURGER ICON) --- */}
				<div className="hidden md:flex">
					<Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
						<SheetTrigger asChild>
							<button
								className={`flex items-center gap-2.5 group ${navTextColor}`}
							>
								{/* REPLACED HexagonIcon with the Menu icon */}
								<Menu className="h-5 w-5" />
								<span className="text-sm font-light uppercase tracking-widest">
									Menu
								</span>
							</button>
						</SheetTrigger>
						{/* The SheetContent is the same for both mobile and desktop triggers */}
						<SheetContent side="left" className="w-full sm:w-[320px]">
							<SheetHeader>
								<SheetTitle className="text-lg font-semibold"></SheetTitle>
							</SheetHeader>
							{propertyAddress}
							<div className="flex flex-col h-full p-6">
								<div className="mb-12">
									{/* You can put a logo or title here */}
									<span className="text-xl font-semibold">
										Coastal Living Awaits
									</span>
								</div>
								<nav className="flex flex-col gap-6">
									<Link
										href="#"
										onClick={closeMobileMenu}
										className="text-xl font-light uppercase tracking-widest text-foreground transition-colors hover:text-primary"
									>
										Home
									</Link>
									{/* Map over main links */}
									{navLinks.map(link => (
										<Link
											key={link.href}
											href={link.href}
											onClick={closeMobileMenu}
											className="text-xl font-light uppercase tracking-widest text-foreground transition-colors hover:text-primary"
										>
											{link.label}
										</Link>
									))}
									<Link
										href="#details"
										onClick={closeMobileMenu}
										className="text-xl font-light uppercase tracking-widest text-foreground transition-colors hover:text-primary"
									>
										Details
									</Link>
								</nav>
							</div>
						</SheetContent>
					</Sheet>
				</div>

				{/* --- CENTER: Property Name (Logo) --- */}
				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
					<Link
						href="/"
						className={`${navTextColor} text-lg font-light uppercase tracking-widest transition-colors hover:text-primary`}
					>
						<span className="hidden sm:inline text-normal">
							840 Seacliff Drive
						</span>
						<span className="sm:hidden">{propertyAddress}</span>
					</Link>
				</div>

				{/* --- RIGHT SIDE: Desktop Navigation Links --- */}
				<nav className="hidden md:flex items-center gap-8">
					{navLinks.map(link => (
						<Link
							key={link.href}
							href={link.href}
							className={`text-sm font-light uppercase tracking-widest transition-colors hover:text-primary ${navTextColor}`}
						>
							{link.label}
						</Link>
					))}
				</nav>

				{/* --- Mobile Menu Trigger (Hamburger) --- */}
				<div className="md:hidden">
					<Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className={`h-6 w-6 ${navTextColor}`} />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
