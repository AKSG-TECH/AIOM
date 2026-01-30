import { posts } from "@/lib/data";
import { notFound } from "next/navigation";
import { CategoryPageView } from "@/components/category-page-view";

export async function generateStaticParams() {
  const categories = [...new Set(posts.map((p) => p.category.toLowerCase()))];
  categories.push('favourites');
  return categories.map((slug) => ({
    slug,
  }));
}

export default function CategoryPage({ params }: { params: { slug:string } }) {
  const allCategories = [...new Set(posts.map(p => p.category.toLowerCase())), 'favourites'];
  if (!allCategories.includes(params.slug)) {
    notFound();
  }

  // Pass the slug directly to the client component
  return <CategoryPageView slug={params.slug} />;
}
