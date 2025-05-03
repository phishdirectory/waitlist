// app/api/webhook-proxy/route.ts

import WaitlistEmail from "@/app/email";
import statsd from "@/lib/statsd";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY!);

export async function POST(request: Request) {
  const startTotal = Date.now();

  try {
    const body = await request.json();

    const startWebhook = Date.now();
    const response = await fetch(`${process.env.WEBHOOK_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // add basic auth
        Authorization: `Basic ${Buffer.from(
          `${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASSWORD}`,
          "utf-8"
        ).toString("base64")}`,
      },
      body: JSON.stringify(body),
    });
    statsd.timing("webhook.response_time", Date.now() - startWebhook);

    const startEmail = Date.now();
    try {
      await resend.emails.send({
        from: "phish.directory <waitlist@transactional.phish.directory>",
        to: body.email,
        subject: "You're on the phish.directory UI waitlist!",
        react: WaitlistEmail(),
      });
      statsd.increment("email.success");
    } catch (error) {
      statsd.increment("email.error");
      console.error("Email error:", error);
    }
    statsd.timing("email.send_time", Date.now() - startEmail);
    statsd.increment("webhook.success");
    statsd.timing("api.total_time", Date.now() - startTotal);

    return new NextResponse(await response.json(), {
      status: response.status,
    });
  } catch (error) {
    statsd.increment("webhook.error");
    console.error("Webhook proxy error:", error);
    return new NextResponse(null, { status: 500 });
  }
}

// Optionally, handle OPTIONS requests for preflight CORS requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
