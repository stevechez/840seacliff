'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

interface NavbarProps {
	propertyAddress: string;
}

const navLinks = [
	{ href: '#details', label: 'Details' },
	{ href: '#gallery', label: 'Gallery' },
	{ href: '#contact', label: 'Contact' },
];

export function Navbar({ propertyAddress }: NavbarProps) {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Set to true if scrolled more than 10px, for example
			setIsScrolled(window.scrollY > 10);
		};

		// Add event listener
		window.addEventListener('scroll', handleScroll);

		// Clean up event listener on component unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const closeMobileMenu = () => setIsMobileMenuOpen(false);

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
				isScrolled
					? 'bg-background/80 backdrop-blur-sm border-b border-border'
					: 'bg-transparent'
			}`}
		>
			<div className="container bg-gray-200 mx-auto flex h-20 items-center justify-between px-4">
				{/* Logo / Property Address */}
				<Link href="/" className="flex items-center">
					<span
						className={`font-bold text-lg transition-colors ${
							isScrolled ? 'text-black' : 'text-black/90'
						}`}
					>
						{propertyAddress}
					</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-6">
					{navLinks.map(link => (
						<Link
							key={link.href}
							href={link.href}
							className={`text-sm font-medium transition-colors hover:text-primary ${
								isScrolled ? 'text-foreground' : 'text-black/90'
							}`}
						>
							{link.label}
						</Link>
					))}
				</nav>

				{/* CTA Button - Desktop */}
				<div className="hidden md:block">
					<Button asChild>
						<Link href="#contact">Schedule a Tour</Link>
					</Button>
				</div>

				{/* Mobile Menu Trigger */}
				<div className="md:hidden">
					<Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu
									className={`h-6 w-6 transition-colors ${
										isScrolled ? 'text-foreground' : 'text-white'
									}`}
								/>
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-full sm:w-[320px]">
							<div className="flex flex-col h-full p-4">
								<Link href="/" onClick={closeMobileMenu} className="mb-8">
									<span className="font-bold text-lg text-foreground">
										{propertyAddress}
									</span>
								</Link>
								<nav className="flex flex-col gap-6">
									{navLinks.map(link => (
										<Link
											key={link.href}
											href={link.href}
											onClick={closeMobileMenu}
											className="text-lg font-medium text-foreground transition-colors hover:text-primary"
										>
											{link.label}
										</Link>
									))}
								</nav>
								<div className="mt-auto">
									<Button asChild className="w-full">
										<Link href="#contact" onClick={closeMobileMenu}>
											Schedule a Tour
										</Link>
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
