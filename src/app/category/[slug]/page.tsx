import { PostCard } from "@/components/post-card";
import { posts } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const categories = [...new Set(posts.map((post) => post.category.toLowerCase()))];
  return categories.map((category) => ({
    slug: category,
  }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryPosts = posts.filter((post) => post.category.toLowerCase() === params.slug);

  const allCategories = [...new Set(posts.map(p => p.category.toLowerCase()))];
  if (!allCategories.includes(params.slug)) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10 px-4">
      {categoryPosts.length > 0 ? (
        <>
          <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center capitalize">
            {params.slug} Posts
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[7px]">
            {categoryPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
            <h1 className="text-3xl font-bold font-headline capitalize">{params.slug} Posts</h1>
            <p className="text-muted-foreground mt-4">No posts found in this category.</p>
        </div>
      )}
    </div>
  );
}
