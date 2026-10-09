import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/validations";
import { notify, rateLimited } from "@/lib/server";
import { getService } from "@/content/services";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(`quote:${ip}`)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again later." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Please check the form and try again." }, { status: 400 });
  }
  const d = parsed.data;
  if (d.website) return NextResponse.json({ ok: true }); // honeypot tripped: pretend success

  const sent = await notify(
    `New quote request: ${getService(d.serviceSlug)?.name ?? d.serviceSlug}`,
    {
      Name: d.name,
      Phone: d.phone,
      Email: d.email,
      Suburb: d.suburb,
      Service: getService(d.serviceSlug)?.name ?? d.serviceSlug,
      "Property type": d.propertyType,
      Budget: d.budgetRange,
      Timeline: d.timeline,
      Description: d.description,
    },
    d.email,
  );
  if (!sent) return NextResponse.json({ ok: false, error: "We couldn't send your request. Please call us." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
