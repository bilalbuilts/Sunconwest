import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Clock, User } from "lucide-react";
import { getPost, posts } from "@/content/blog";
import { getService } from "@/content/services";
import { absUrl, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return pageMeta({ title: p.title, description: p.excerpt, path: `/blog/${p.slug}`, image: p.image, type: "article" });
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const service = getService(post.serviceSlug);
  const date = new Date(post.date).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      <section className="bg-navy-deep py-14 text-white">
        <div className="container-x max-w-3xl">
          <Breadcrumb items={[{ name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]} />
          <p className="eyebrow mt-6">{post.category}</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-5xl">{post.title}</h1>
          <p className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/75">
            <span className="flex items-center gap-1.5"><User size={15} aria-hidden /> {post.author}</span>
            <span>{date}</span>
            <span className="flex items-center gap-1.5"><Clock size={15} aria-hidden /> {post.readMins} min read</span>
          </p>
        </div>
      </section>

      <article className="py-12">
        <div className="container-x max-w-3xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width:768px) 48rem, 100vw" className="object-cover" />
          </div>
          <div className="prose-sw mt-8">
            {post.body.map((b, i) =>
              b.type === "h2" ? (
                <h2 key={i}>{b.text}</h2>
              ) : b.type === "ul" ? (
                <ul key={i}>{b.items.map((it) => <li key={it}>{it}</li>)}</ul>
              ) : (
                <p key={i}>{b.text}</p>
              ),
            )}
          </div>

          {service && (
            <div className="mt-10 rounded-2xl bg-sand p-6">
              <p className="font-semibold text-heading">Need help with {service.name.toLowerCase()}?</p>
              <p className="mt-1 text-sm text-muted">{service.short}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href={`/services/${service.slug}`} className="btn btn-navy py-2.5 text-sm">View {service.name} services</Link>
                <Link href={`/get-quote?service=${service.slug}`} className="btn btn-accent py-2.5 text-sm">Get a quote</Link>
              </div>
            </div>
          )}
        </div>
      </article>

      <CTASection />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          image: absUrl(post.image),
          datePublished: post.date,
          author: { "@type": "Organization", name: post.author },
          publisher: { "@type": "Organization", name: site.legalName },
          mainEntityOfPage: absUrl(`/blog/${post.slug}`),
        }}
      />
    </>
  );
}
