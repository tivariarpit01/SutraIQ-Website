// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose"; // Import your Mongoose connection utility
import ContactMessage from "@/lib/models/ContactMessage"; // Import your Mongoose model

/**
 * Handles POST requests for the contact form submission.
 * This function receives data from the frontend and saves it to the MongoDB database using Mongoose.
 */
export async function POST(request: Request) {
  // <--- THIS LINE IS CRUCIAL
  try {
    // Connect to the MongoDB database
    await connectToDatabase();

    // Parse the JSON body from the incoming request, including phoneNumber
    const { name, email, phoneNumber, message } = await request.json();

    // --- Server-side Validation ---
    if (!name || typeof name !== "string" || name.trim() === "") {
      return NextResponse.json(
        { message: "Name is required." },
        { status: 400 },
      );
    }
    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { message: "A valid email is required." },
        { status: 400 },
      );
    }
    // Optional: Add validation for phoneNumber if it's provided
    if (phoneNumber && typeof phoneNumber !== "string") {
      return NextResponse.json(
        { message: "Phone number must be a string." },
        { status: 400 },
      );
    }
    if (!message || typeof message !== "string" || message.trim() === "") {
      return NextResponse.json(
        { message: "Message is required." },
        { status: 400 },
      );
    }

    // ⭐ Use Mongoose to create and save a new ContactMessage document ⭐
    const newContactMessage = await ContactMessage.create({
      name,
      email,
      phoneNumber,
      message,
    });

    // Log the saved message details to the server console for debugging
    console.log("--- New Contact Form Submission Saved to MongoDB ---");
    console.log("ID:", newContactMessage._id);
    console.log("Name:", newContactMessage.name);
    console.log("Email:", newContactMessage.email);
    console.log("Phone Number:", newContactMessage.phoneNumber);
    console.log("Message:", newContactMessage.message);
    console.log("Created At:", newContactMessage.createdAt);
    console.log("--------------------------------------------------");

    // Send a success response back to the client
    return NextResponse.json(
      {
        message: "Your message has been received and saved successfully!",
        id: newContactMessage._id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(
      "Error processing contact form submission or saving to DB:",
      error,
    );
    return NextResponse.json(
      { message: "Failed to send message. An internal server error occurred." },
      { status: 500 },
    );
  }
}
