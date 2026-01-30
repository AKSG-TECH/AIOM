
'use client';

import { PostCard } from "@/components/post-card";
import { posts } from "@/lib/data";
import { useEffect, useState } from "react";
import type { Post } from "@/lib/definitions";
import { Skeleton } from "@/components/ui/skeleton";

function PostCardSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="aspect-[9/16] w-full rounded-xl" />
      <div className="space-y-2 p-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-4 w-1/3 mx-auto" />
      </div>
    </div>
  );
}


export function CategoryPageView({ slug }: { slug: string }) {
  const [categoryPosts, setCategoryPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const title = slug === 'favourites' ? 'Favourite Posts' : `${slug} Posts`;

  useEffect(() => {
    let postsToShow: Post[] = [];
    if (slug === 'favourites') {
      try {
        const favouriteIds: string[] = JSON.parse(localStorage.getItem('favouritePosts') || '[]');
        postsToShow = posts.filter(p => favouriteIds.includes(p.id));
      } catch (error) {
        console.error("Failed to parse favourites from localStorage", error);
        postsToShow = [];
      }
    } else {
      postsToShow = posts.filter((post) => post.category.toLowerCase() === slug);
    }
    setCategoryPosts(postsToShow);
    setIsLoading(false);
  }, [slug]);

  return (
    <div className="container mx-auto py-10 px-4">
      {isLoading ? (
        <>
          <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center capitalize">
            {title}
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[7px]">
            {Array.from({ length: 8 }).map((_, i) => (
              <PostCardSkeleton key={i} />
            ))}
          </div>
        </>
      ) : categoryPosts.length > 0 ? (
        <>
          <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center capitalize">
            {title}
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[7px]">
            {categoryPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
            <h1 className="text-3xl font-bold font-headline capitalize">{title}</h1>
            <p className="text-muted-foreground mt-4">
                {slug === 'favourites' 
                    ? "You haven't added any posts to your favourites yet."
                    : slug === 'videos'
                    ? "Coming Soon"
                    : "No posts found in this category."}
            </p>
        </div>
      )}
    </div>
  );
}
