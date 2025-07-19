'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Toaster as SonnerToaster, toast as sonnerToast } from 'sonner'; // If using sonner
import { useState } from 'react';

// Make sure the schema matches the one in your API route
const formSchema = z.object({
	name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
	email: z.string().email({ message: 'Please enter a valid email.' }),
	phone: z.string().optional(),
	message: z
		.string()
		.min(10, { message: 'Message must be at least 10 characters.' }),
});

export function ContactForm() {
	const [isLoading, setIsLoading] = useState(false);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { name: '', email: '', phone: '', message: '' },
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsLoading(true);
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(values),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || 'Something went wrong.');
			}

			sonnerToast.success('Message Sent!', {
				description: "Thank you for your interest. We'll be in touch soon.",
			});
			form.reset();
		} catch (error: unknown) {
			sonnerToast.error('Submission Failed', {
				description:
					error instanceof Error ? error.message : 'Please try again later.',
			});
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
			{/* ... Input fields with Form Provider from react-hook-form for better error handling ... */}
			{/* For simplicity, here is a direct version */}
			<div>
				<Input placeholder="Name" {...form.register('name')} />
				{form.formState.errors.name && (
					<p className="text-red-500 text-sm mt-1">
						{form.formState.errors.name.message}
					</p>
				)}
			</div>
			<div>
				<Input placeholder="Email Address" {...form.register('email')} />
				{form.formState.errors.email && (
					<p className="text-red-500 text-sm mt-1">
						{form.formState.errors.email.message}
					</p>
				)}
			</div>
			<div>
				<Input placeholder="Phone Number" {...form.register('phone')} />
			</div>
			<div>
				<Textarea placeholder="Your Message" {...form.register('message')} />
				{form.formState.errors.message && (
					<p className="text-red-500 text-sm mt-1">
						{form.formState.errors.message.message}
					</p>
				)}
			</div>
			<Button type="submit" className="w-full" disabled={isLoading}>
				{isLoading ? 'Sending...' : 'Send Inquiry'}
			</Button>
			<SonnerToaster position="top-right" richColors />
		</form>
	);
}
