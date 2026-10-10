"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { budgetRanges, propertyTypes, quoteSchema, timelines, type QuoteInput } from "@/lib/validations";
import { services } from "@/content/services";
import { site } from "@/lib/site";
import { formatAuPhone } from "@/lib/phone";
import { Field, inputCls } from "./Field";

const steps = ["Your details", "Your project", "Review"] as const;
const stepFields: (keyof QuoteInput)[][] = [
  ["name", "phone", "email", "suburb"],
  ["serviceSlug", "propertyType", "description"],
  [],
];

export function QuoteForm() {
  const params = useSearchParams();
  const preset = params.get("service") ?? "";
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { serviceSlug: services.some((s) => s.slug === preset) ? preset : "" },
  });

  const next = async () => {
    if (await trigger(stepFields[step])) setStep((s) => s + 1);
  };

  const onSubmit = async (data: QuoteInput) => {
    setStatus("sending");
    setServerError("");
    try {
      const res = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
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
        <h2 className="mt-4 text-2xl font-bold text-heading">Thanks, we&apos;ve got your request</h2>
        <p className="mt-2 text-muted">We&apos;ll contact you within one business day. For anything urgent, WhatsApp us on {site.phone}.</p>
      </div>
    );
  }

  const v = getValues();

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-3xl border border-line bg-surface p-6 shadow-sm sm:p-10">
      <ol className="mb-8 flex items-center gap-2" aria-label="Progress">
        {steps.map((label, i) => (
          <li key={label} className="flex flex-1 items-center gap-2" aria-current={i === step ? "step" : undefined}>
            <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-semibold ${i <= step ? "bg-accent text-white" : "bg-sand text-muted"}`}>{i + 1}</span>
            <span className={`hidden text-sm font-medium sm:inline ${i === step ? "text-heading" : "text-muted"}`}>{label}</span>
            {i < steps.length - 1 && <span className="h-0.5 flex-1 bg-line" aria-hidden />}
          </li>
        ))}
      </ol>

      {/* Honeypot: hidden from people, tempting to bots */}
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px]" {...register("website")} />

      {step === 0 && (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full name" htmlFor="name" error={errors.name?.message}>
            <input id="name" autoComplete="name" className={inputCls} {...register("name")} />
          </Field>
          <Field label="Phone" htmlFor="phone" error={errors.phone?.message}>
            <input id="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="04xx xxx xxx" className={inputCls} maxLength={16} {...register("phone", { onChange: (e) => { e.target.value = formatAuPhone(e.target.value); } })} />
          </Field>
          <Field label="Email" htmlFor="email" error={errors.email?.message}>
            <input id="email" type="email" autoComplete="email" className={inputCls} {...register("email")} />
          </Field>
          <Field label="Suburb / location of works" htmlFor="suburb" error={errors.suburb?.message}>
            <input id="suburb" className={inputCls} placeholder="e.g. Joondalup" {...register("suburb")} />
          </Field>
        </div>
      )}

      {step === 1 && (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Service needed" htmlFor="serviceSlug" error={errors.serviceSlug?.message}>
            <select id="serviceSlug" className={inputCls} {...register("serviceSlug")}>
              <option value="">Select a service</option>
              {services.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
            </select>
          </Field>
          <Field label="Property type" htmlFor="propertyType" error={errors.propertyType?.message}>
            <select id="propertyType" className={inputCls} {...register("propertyType")}>
              <option value="">Select a property type</option>
              {propertyTypes.map((p) => <option key={p}>{p}</option>)}
            </select>
          </Field>
          <Field label="Estimated budget (optional)" htmlFor="budgetRange">
            <select id="budgetRange" className={inputCls} {...register("budgetRange")}>
              <option value="">Select a range</option>
              {budgetRanges.map((p) => <option key={p}>{p}</option>)}
            </select>
          </Field>
          <Field label="Timeline (optional)" htmlFor="timeline">
            <select id="timeline" className={inputCls} {...register("timeline")}>
              <option value="">Select a timeline</option>
              {timelines.map((p) => <option key={p}>{p}</option>)}
            </select>
          </Field>
          <div className="sm:col-span-2">
            <Field label="Describe the work" htmlFor="description" error={errors.description?.message}>
              <textarea id="description" rows={5} className={inputCls} placeholder="Tell us what needs doing, any issues, and anything else we should know." {...register("description")} />
            </Field>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold text-heading">Review your request</h2>
          <dl className="mt-4 grid gap-x-8 gap-y-3 rounded-2xl bg-sand p-5 text-sm sm:grid-cols-2">
            {[
              ["Name", v.name], ["Phone", v.phone], ["Email", v.email], ["Suburb", v.suburb],
              ["Service", services.find((s) => s.slug === v.serviceSlug)?.name], ["Property", v.propertyType],
              ["Budget", v.budgetRange || "Not specified"], ["Timeline", v.timeline || "Not specified"],
            ].map(([k, val]) => (
              <div key={k}><dt className="font-medium text-heading">{k}</dt><dd className="text-muted">{val}</dd></div>
            ))}
            <div className="sm:col-span-2"><dt className="font-medium text-heading">Description</dt><dd className="whitespace-pre-wrap text-muted">{v.description}</dd></div>
          </dl>
          <label className="mt-5 flex items-start gap-3 text-sm text-ink">
            <input type="checkbox" className="mt-1 h-4 w-4 accent-[#f26b1d]" {...register("consent")} />
            <span>I agree to Suncon West contacting me about this request, as described in the <a href="/privacy-policy" className="font-medium text-accent underline">Privacy Policy</a>.</span>
          </label>
          {errors.consent && <p role="alert" className="mt-1 text-sm font-semibold text-red-600 dark:text-red-400">{errors.consent.message}</p>}
          {status === "error" && <p role="alert" className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700 dark:bg-red-950/50 dark:text-red-300">{serverError}</p>}
        </div>
      )}

      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 0 ? (
          <button type="button" onClick={() => setStep((s) => s - 1)} className="btn border-2 border-line text-heading hover:border-navy">Back</button>
        ) : <span />}
        {step < steps.length - 1 ? (
          <button type="button" onClick={next} className="btn btn-accent">Continue</button>
        ) : (
          <button type="submit" disabled={status === "sending"} className="btn btn-accent disabled:opacity-60">
            {status === "sending" && <Loader2 size={18} className="animate-spin" aria-hidden />} Submit request
          </button>
        )}
      </div>
    </form>
  );
}
