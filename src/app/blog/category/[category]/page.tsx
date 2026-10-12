import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, posts, slugifyCategory } from "@/content/blog";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { PostCard } from "@/components/sections/PostCard";
import { PageSkeleton } from "@/components/ui/PageSkeleton";

const find = (slug: string) => categories.find((c) => slugifyCategory(c) === slug);

export function generateStaticParams() {
  return categories.map((c) => ({ category: slugifyCategory(c) }));
}

export async function generateMetadata({ params }: PageProps<"/blog/category/[category]">): Promise<Metadata> {
  const { category } = await params;
  const name = find(category);
  if (!name) return {};
  return pageMeta({
    title: `${name} Articles`,
    description: `Suncon West guides and advice about ${name.toLowerCase()} in Perth and Western Australia.`,
    path: `/blog/category/${category}`,
  });
}

async function CategoryContent({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const name = find(category);
  if (!name) notFound();

  return (
    <>
      <PageHero
        title={`${name} Articles`}
        image="/images/plans.jpg"
        crumbs={[{ name: "Blog", path: "/blog" }, { name, path: `/blog/category/${category}` }]}
      />
      <section className="py-16">
        <div className="container-x">
          <Link href="/blog" className="mb-8 inline-block font-medium text-accent">&larr; All articles</Link>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.filter((p) => p.category === name).map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// The page shell stays static; the URL param is read inside Suspense so navigations stay instant.
export default function CategoryPage({ params }: PageProps<"/blog/category/[category]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <CategoryContent params={params} />
    </Suspense>
  );
}
