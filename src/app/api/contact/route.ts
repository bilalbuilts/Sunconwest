import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { notify, rateLimited } from "@/lib/server";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(`contact:${ip}`)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again later." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Please check the form and try again." }, { status: 400 });
  }
  const d = parsed.data;
  if (d.website) return NextResponse.json({ ok: true });

  const sent = await notify("New website message", { Name: d.name, Email: d.email, Phone: d.phone, Message: d.message }, d.email);
  if (!sent) return NextResponse.json({ ok: false, error: "We couldn't send your message. Please WhatsApp or email us." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
