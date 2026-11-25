import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Spam honeypot check
    if (body.website_url_hp && body.website_url_hp.length > 0) {
      return NextResponse.json(
        { error: "Spam submission detected." },
        { status: 400 }
      );
    }

    // Server-side Zod validation
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const {
      fullName,
      businessEmail,
      phoneNumber,
      companyName,
      serviceRequired,
      estimatedBudget,
      projectDetails,
    } = validationResult.data;

    // Log enquiry details safely in server console
    console.log("[New Inbound Lead Received]", {
      timestamp: new Date().toISOString(),
      fullName,
      businessEmail,
      phoneNumber,
      companyName,
      serviceRequired,
      estimatedBudget,
      projectDetailsLength: projectDetails.length,
    });

    // If an external SMTP or webhook like RESEND_API_KEY or DISCORD/SLACK_WEBHOOK is set, send notification
    if (process.env.RESEND_API_KEY) {
      // Production integration with Resend / SMTP
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been successfully received. A senior strategist from VGrow Technologies will review your specifications and respond within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { error: "An unexpected server error occurred. Please try again or email us directly at technologiesvgrow@gmail.com." },
      { status: 500 }
    );
  }
}
