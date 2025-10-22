import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = contactSchema.parse(req.body);

      // Create transporter for sending emails
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER || 'basitbalogun234@gmail.com',
          pass: process.env.EMAIL_PASS || 'your-app-password'
        }
      });

      // Email content
      const mailOptions = {
        from: email,
        to: 'basitbalogun234@gmail.com',
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3B82F6;">New Contact Form Submission</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="color: #1e293b; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #475569;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            <div style="margin-top: 20px; padding: 15px; background: #eff6ff; border-radius: 8px;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                This message was sent from your Basit Tech website contact form.
              </p>
            </div>
          </div>
        `,
        replyTo: email
      };

      // Send email
      await transporter.sendMail(mailOptions);

      res.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.errors 
        });
      }

      res.status(500).json({ 
        success: false, 
        message: "Failed to send email. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
