"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { Field, inputCls } from "./Field";

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
      <div className="rounded-3xl border border-line bg-surface p-10 text-center shadow-sm">
        <CheckCircle2 size={56} className="mx-auto text-green-600" aria-hidden />
        <h2 className="mt-4 text-2xl font-bold text-heading">Message sent</h2>
        <p className="mt-2 text-muted">Thanks for getting in touch. We&apos;ll reply within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 rounded-3xl border border-line bg-surface p-6 shadow-sm sm:p-8">
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px]" {...register("website")} />
      <Field label="Full name" htmlFor="c-name" error={errors.name?.message}>
        <input id="c-name" autoComplete="name" className={inputCls} {...register("name")} />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" htmlFor="c-email" error={errors.email?.message}>
          <input id="c-email" type="email" autoComplete="email" className={inputCls} {...register("email")} />
        </Field>
        <Field label="Phone (optional)" htmlFor="c-phone" error={errors.phone?.message}>
          <input id="c-phone" type="tel" autoComplete="tel" className={inputCls} {...register("phone")} />
        </Field>
      </div>
      <Field label="Message" htmlFor="c-message" error={errors.message?.message}>
        <textarea id="c-message" rows={6} className={inputCls} {...register("message")} />
      </Field>
      {status === "error" && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700 dark:bg-red-950/50 dark:text-red-300">{serverError}</p>}
      <button type="submit" disabled={status === "sending"} className="btn btn-accent disabled:opacity-60">
        {status === "sending" && <Loader2 size={18} className="animate-spin" aria-hidden />} Send message
      </button>
    </form>
  );
}
