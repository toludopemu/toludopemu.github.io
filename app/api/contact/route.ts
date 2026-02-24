import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        // Log the message to the console (visible in server logs)
        console.log("New Contact Form Submission:", { name, email, subject, message });

        // In a real production app, you would use a service like Resend, SendGrid, or Postmark here.
        // Example with Resend (if an API key were available):
        /*
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'Portfolio <onboarding@resend.dev>',
            to: ['toludopemu@gmail.com'],
            subject: `New Message: ${subject}`,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
          }),
        });
        */

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }
}
