import nodemailer from "nodemailer";
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

/** Every form submission is delivered here. Override with MAIL_TO in .env.local if needed. */
const recipient = () => process.env.MAIL_TO || site.email;

/**
 * Email delivery. Configure ONE of these in .env.local (see .env.example):
 *  1. SMTP (any mailbox: Gmail, Microsoft 365, your domain host)  -> SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
 *  2. Resend API                                                  -> RESEND_API_KEY
 * With neither set, submissions are only logged in development and REJECTED in production, so a visitor is
 * never told "sent" when nothing was delivered.
 */
export async function notify(subject: string, fields: Record<string, string | undefined>, replyTo?: string) {
  const to = recipient();
  const rows = Object.entries(fields).filter(([, v]) => v);
  const html = `<h2 style="font-family:sans-serif">${esc(subject)}</h2><table cellpadding="8" style="font-family:sans-serif;border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="border-bottom:1px solid #eee;vertical-align:top"><b>${esc(k)}</b></td><td style="border-bottom:1px solid #eee;white-space:pre-wrap">${esc(v ?? "")}</td></tr>`)
    .join("")}</table><p style="font-family:sans-serif;color:#777;font-size:12px">Sent from the ${esc(site.legalName)} website. Reply to this email to answer the visitor.</p>`;
  const text = `${subject}\n\n${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n`;

  try {
    const smtpHost = process.env.SMTP_HOST;
    if (smtpHost) {
      const port = Number(process.env.SMTP_PORT ?? 587);
      const transport = nodemailer.createTransport({
        host: smtpHost,
        port,
        secure: port === 465, // 465 = implicit TLS; 587 uses STARTTLS
        auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
      });
      await transport.sendMail({
        from: process.env.MAIL_FROM || `${site.name} Website <${process.env.SMTP_USER || to}>`,
        to,
        replyTo,
        subject,
        text,
        html,
      });
      return true;
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.MAIL_FROM || `${site.name} Website <onboarding@resend.dev>`,
          to: [to],
          reply_to: replyTo,
          subject,
          html,
          text,
        }),
      });
      if (!res.ok) console.error("[notify] Resend rejected the message:", res.status, await res.text());
      return res.ok;
    }
  } catch (err) {
    console.error("[notify] Email delivery failed:", err);
    return false;
  }

  // No mail provider configured.
  if (process.env.NODE_ENV === "production") {
    console.error("[notify] No SMTP_HOST or RESEND_API_KEY configured: submission NOT delivered.", subject);
    return false;
  }
  console.log(`[notify] (dev: no mail provider configured, not emailed) -> ${to}\n${text}`);
  return true;
}
