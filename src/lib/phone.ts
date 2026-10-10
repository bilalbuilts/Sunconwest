/**
 * Australian phone numbers: strict validation + live formatting.
 * Accepted:
 *   Mobile            04XX XXX XXX        or +61 4XX XXX XXX
 *   Landline          0X XXXX XXXX (2,3,7,8)  or +61 X XXXX XXXX
 *   Business / 1800   1300 XXX XXX, 1800 XXX XXX, 13 XX XX
 */

const onlyDigits = (s: string) => s.replace(/\D/g, "");

const isInternational = (raw: string) => {
  const t = raw.trim();
  return t.startsWith("+") || onlyDigits(t).startsWith("61");
};

const group = (digits: string, sizes: number[]) => {
  const parts: string[] = [];
  let i = 0;
  for (const n of sizes) {
    if (i >= digits.length) break;
    parts.push(digits.slice(i, i + n));
    i += n;
  }
  return parts.join(" ");
};

/**
 * Cleans and formats whatever the visitor typed or pasted, capping the length so extra digits cannot be entered.
 * Safe to call on every keystroke.
 */
export function formatAuPhone(raw: string): string {
  if (!raw.trim()) return "";
  if (isInternational(raw)) {
    const d = onlyDigits(raw).slice(0, 11); // 61 + 9 digits
    if (d.length <= 2) return `+${d}`;
    // Not an Australian country code: leave it as typed so validation can reject it
    // (never rewrite someone's +44 number into a different +61 one).
    if (!d.startsWith("61")) return `+${d}`;
    const rest = d.slice(2);
    // +61 4XX XXX XXX (mobile)  |  +61 X XXXX XXXX (landline)
    return `+61 ${rest.startsWith("4") ? group(rest, [3, 3, 3]) : group(rest, [1, 4, 4])}`;
  }
  const d = onlyDigits(raw);
  if (d.startsWith("04")) return group(d.slice(0, 10), [4, 3, 3]);
  if (/^0[2378]/.test(d)) return group(d.slice(0, 10), [2, 4, 4]);
  if (/^1[38]00/.test(d)) return group(d.slice(0, 10), [4, 3, 3]);
  if (/^13/.test(d)) return group(d.slice(0, 6), [2, 2, 2]);
  return d.slice(0, 10);
}

export type PhoneCheck = { ok: true } | { ok: false; message: string };

export function checkAuPhone(raw: string): PhoneCheck {
  const value = raw.trim();
  if (!value) return { ok: false, message: "Please enter your phone number" };
  if (/[^\d\s+()-]/.test(value)) {
    return { ok: false, message: "Phone number can only contain digits, spaces and +" };
  }

  const digits = onlyDigits(value);
  let national = digits;
  if (isInternational(value)) {
    if (!digits.startsWith("61")) return { ok: false, message: "Use +61 for Australian numbers, e.g. +61 412 345 678" };
    const local = digits.slice(2);
    if (local.startsWith("0")) {
      return { ok: false, message: "Remove the 0 after +61, e.g. +61 412 345 678" };
    }
    national = `0${local}`;
  }

  const valid =
    /^04\d{8}$/.test(national) || // mobile
    /^0[2378]\d{8}$/.test(national) || // landline
    /^1[38]00\d{6}$/.test(national) || // 1300 / 1800
    /^13\d{4}$/.test(national); // 13 XX XX

  if (!valid) {
    if (national.length > 10) return { ok: false, message: "That number has too many digits" };
    return {
      ok: false,
      message: "Enter a valid Australian number, e.g. 0412 345 678 or 08 9123 4567",
    };
  }

  // Reject obvious fakes such as 0400 000 000 or 0888 888 888.
  const subscriber = national.slice(2);
  if (/^(\d)\1+$/.test(subscriber)) {
    return { ok: false, message: "Please enter your real phone number" };
  }
  return { ok: true };
}
