import { PostCard } from "@/components/post-card";
import { posts } from "@/lib/data";

export default function BoysPage() {
  const boysPosts = posts.filter((post) => post.category === "BOYS");

  return (
    <div className="container mx-auto py-10 px-4">
      {boysPosts.length > 0 ? (
        <>
          <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center">
            Boys Posts
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {boysPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
            <h1 className="text-3xl font-bold font-headline">Boys Posts</h1>
            <p className="text-muted-foreground mt-4">This page is under construction. Check back soon for posts in this category!</p>
        </div>
      )}
    </div>
  );
}
