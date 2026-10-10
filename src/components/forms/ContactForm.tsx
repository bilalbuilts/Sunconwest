"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Mail, MessageSquare, Phone, Send, User } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { formatAuPhone } from "@/lib/phone";
import { Field, iconInputCls } from "./Field";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactInput) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Something went wrong");
      setStatus("done");
    } catch (e) {
      setServerError(e instanceof Error ? e.message : "Something went wrong");
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-line bg-surface p-10 text-center">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-green-500/10 text-green-600">
          <CheckCircle2 size={44} aria-hidden />
        </span>
        <h2 className="mt-5 text-2xl font-bold text-heading">Message sent</h2>
        <p className="mt-2 max-w-sm text-muted">Thanks for getting in touch. We&apos;ll reply within one business day.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-line bg-surface p-6 sm:p-8"
    >
      <span aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-accent" />

      <div>
        <p className="eyebrow">Send a message</p>
        <h2 className="mt-1.5 text-2xl font-bold text-heading">How can we help?</h2>
        <p className="mt-1 text-sm text-muted">Tell us about your project and we&apos;ll reply within one business day.</p>
      </div>

      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px]" {...register("website")} />

      <Field label="Full name" htmlFor="c-name" error={errors.name?.message} icon={<User size={18} />}>
        <input id="c-name" autoComplete="name" placeholder="Your full name" className={iconInputCls} {...register("name")} />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" htmlFor="c-email" error={errors.email?.message} icon={<Mail size={18} />}>
          <input id="c-email" type="email" autoComplete="email" placeholder="you@example.com" className={iconInputCls} {...register("email")} />
        </Field>
        <Field label="Phone" htmlFor="c-phone" error={errors.phone?.message} icon={<Phone size={18} />}>
          <input id="c-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="04xx xxx xxx" className={iconInputCls} maxLength={16} {...register("phone", { onChange: (e) => { e.target.value = formatAuPhone(e.target.value); } })} />
        </Field>
      </div>

      {/* Message grows to fill the remaining height so the form matches the left column */}
      <Field
        label="Message"
        htmlFor="c-message"
        error={errors.message?.message}
        icon={<MessageSquare size={18} />}
        iconTop
        className="flex flex-1 flex-col"
      >
        <textarea
          id="c-message"
          rows={5}
          placeholder="What do you need help with?"
          className={`${iconInputCls} h-full min-h-36 resize-none`}
          {...register("message")}
        />
      </Field>

      {status === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700 dark:bg-red-950/50 dark:text-red-300">
          {serverError}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn btn-accent w-full py-3.5 disabled:opacity-60">
        {status === "sending" ? <Loader2 size={18} className="animate-spin" aria-hidden /> : <Send size={18} aria-hidden />}
        Send message
      </button>
      <p className="text-center text-xs text-muted">We only use your details to respond to your enquiry.</p>
    </form>
  );
}
