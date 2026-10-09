import Link from "next/link";
import { categories, posts, slugifyCategory } from "@/content/blog";
import { PostCard } from "@/components/sections/PostCard";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = pageMeta({
  title: "Construction & Renovation Blog",
  description: "Practical advice on roofing, tiling, plumbing, painting, carpentry, renovation and restoration from the Suncon West team in Perth.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="The Suncon West Blog"
        lead="Straight-talking guides on building, renovating and maintaining property in Western Australia."
        image="/images/plans.jpg"
        crumbs={[{ name: "Blog", path: "/blog" }]}
      />
      <section className="py-16">
        <div className="container-x">
          <ul className="mb-10 flex flex-wrap gap-2" aria-label="Categories">
            <li><span className="rounded-full bg-navy px-4 py-1.5 text-sm font-bold text-white">All</span></li>
            {categories.map((c) => (
              <li key={c}>
                <Link href={`/blog/category/${slugifyCategory(c)}`} className="rounded-full border border-line px-4 py-1.5 text-sm font-semibold text-navy hover:border-accent hover:text-accent">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
