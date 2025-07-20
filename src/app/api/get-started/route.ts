import connectToDatabase from '@/lib/mongoose';
import GetStarted from '@/lib/models/GetStarted';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const { name, email, company = '', services, details, budget = '' } = body;

    // Validation: Check required fields
    if (
      !name?.trim() ||
      !email?.trim() ||
      !Array.isArray(services) ||
      services.length === 0 ||
      !details?.trim()
    ) {
      return NextResponse.json(
        { success: false, message: 'Required fields are missing or invalid.' },
        { status: 400 }
      );
    }

    const newQuote = await GetStarted.create({
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      services,
      details: details.trim(),
      budget: budget.trim(),
    });

    return NextResponse.json(
      { success: true, message: 'Quote created successfully.', data: newQuote },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('❌ Quote submission failed:', error.message);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json({ message: 'GET method not allowed' }, { status: 405 });
}
