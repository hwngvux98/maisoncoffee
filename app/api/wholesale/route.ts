import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const wholesaleSchema = z.object({
  businessName: z.string().trim().min(1).max(200),
  workEmail: z.string().trim().email().max(200),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = wholesaleSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const { businessName, workEmail } = parsed.data;
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Maison Coffee Wholesale <wholesale@maisoncoffee.vn>",
    to: "hello@maisoncoffee.vn",
    replyTo: workEmail,
    subject: `Sample kit request — ${businessName}`,
    text: `New wholesale sample kit request\n\nBusiness name: ${businessName}\nWork email: ${workEmail}`,
  });

  if (error) {
    console.error("Resend error", error);
    return NextResponse.json({ error: "Could not send your request." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
