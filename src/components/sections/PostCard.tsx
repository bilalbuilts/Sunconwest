import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/content/blog";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-accent">{post.category} &middot; {post.readMins} min read</p>
        <h2 className="mt-2 text-xl font-semibold leading-snug text-heading">{post.title}</h2>
        <p className="mt-2 line-clamp-3 text-sm text-muted">{post.excerpt}</p>
      </div>
    </Link>
  );
}
