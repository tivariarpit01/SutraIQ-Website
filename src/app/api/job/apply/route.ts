import { NextRequest, NextResponse } from "next/server";
import { Document } from "mongoose";
import JobApplication from "@/lib/models/JobApplication";
import connectToDatabase from "@/lib/mongoose";

// Define expected shape of the request body (optional but clean af)
interface JobApplicationBody extends Document {
  name: string;
  email: string;
  phone: string;
  message: string;
  resumeUrl: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await connectToDatabase(); 

    const body: JobApplicationBody = await req.json();

    const application = new JobApplication(body);
    await application.save();

    return NextResponse.json({
      success: true,
      message: "Application received.",
    });
  } catch (err: unknown) {
    console.error(err);

    // TS-safe error extraction
    const errorMessage = err instanceof Error ? err.message : "Unknown error";

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
        error: errorMessage,
      },
      { status: 500 },
    );
  }
}
