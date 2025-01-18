import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { z } from "zod";


// Zod schema for validation
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is too short"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
  

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email environment variables");
      return res.status(500).json({ message: "Server configuration error" });
    }

    const { name, email, phone, message } = contactFormSchema.parse(req.body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      text: `You have a new contact form submission:

        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: error.errors.map((e) => e.message).join(", ") });
    }
    if (error.response) {
      console.error("Nodemailer Error Response:", error.response);
    }
    console.error("Error sending email:", error.message || error);
    res.status(500).json({ message: "Failed to send email. Please try again later." });
  }
}
