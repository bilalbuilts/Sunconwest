import { site } from "./site";

// Simple in-memory limiter. Fine for one server instance; swap for Upstash/Redis on serverless.
const hits = new Map<string, number[]>();
export function rateLimited(key: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > limit;
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** Sends via Resend when RESEND_API_KEY is set; otherwise logs (useful in development). */
export async function notify(subject: string, fields: Record<string, string | undefined>, replyTo?: string) {
  const html = `<h2>${esc(subject)}</h2><table cellpadding="6">${Object.entries(fields)
    .map(([k, v]) => `<tr><td><b>${esc(k)}</b></td><td>${esc(v ?? "")}</td></tr>`)
    .join("")}</table>`;

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.log(`[notify] ${subject}`, fields);
    return true;
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.MAIL_FROM ?? `Suncon West Website <onboarding@resend.dev>`,
      to: [process.env.MAIL_TO ?? site.email],
      reply_to: replyTo,
      subject,
      html,
    }),
  });
  return res.ok;
}
