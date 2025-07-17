import { NextResponse } from 'next/server';
import { z } from 'zod';

// We're using Nodemailer as an example. You'd need to install it.
// import nodemailer from 'nodemailer';

const contactSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters.'),
	email: z.string().email('Invalid email address.'),
	phone: z.string().optional(),
	message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const parsedData = contactSchema.safeParse(body);

		if (!parsedData.success) {
			return NextResponse.json(
				{ message: 'Invalid input.', errors: parsedData.error.flatten() },
				{ status: 400 }
			);
		}

		const { name, email, phone, message } = parsedData.data;

		// --- PRODUCTION EMAIL SENDING LOGIC ---
		// Here you would integrate with a service like Resend, SendGrid, or Nodemailer.
		// Example:
		// const transporter = nodemailer.createTransport({...});
		// await transporter.sendMail({
		//   from: '"Dream Home Site" <noreply@yourdomain.com>',
		//   to: 'realestate-agent@example.com',
		//   subject: `New Inquiry from ${name}`,
		//   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
		// });

		console.log('Received data:', { name, email, phone, message });
		// For this example, we'll just simulate a success response.

		return NextResponse.json(
			{ message: 'Thank you for your inquiry! We will be in touch shortly.' },
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: 'An unexpected error occurred.' },
			{ status: 500 }
		);
	}
}
