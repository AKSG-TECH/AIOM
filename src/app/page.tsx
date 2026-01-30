'use client';

import { NewsTicker } from '@/components/news-ticker';
import { posts as allPosts } from '@/lib/data';
import { PostCard } from '@/components/post-card';
import { BlogSidebar } from '@/components/blog-sidebar';
import { useEffect, useState } from 'react';
import type { Post } from '@/lib/definitions';
import { Skeleton } from '@/components/ui/skeleton';

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

export default function Home() {
  const [shuffledPosts, setShuffledPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fisher-Yates shuffle algorithm
    const shuffle = (array: Post[]) => {
      let currentIndex = array.length,  randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    }
    // Clone the array to avoid mutating the original `allPosts`
    setShuffledPosts(shuffle([...allPosts]));
  }, []);

  const showSkeletons = shuffledPosts.length === 0;

  return (
    <>
      <NewsTicker posts={allPosts} />
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[7px]">
              {showSkeletons 
                ? allPosts.map((post) => <PostCardSkeleton key={post.id} />)
                : shuffledPosts.map((post) => <PostCard key={post.id} post={post} />)
              }
            </div>
          </div>
          <aside>
            <BlogSidebar />
          </aside>
        </div>
      </div>
    </>
  );
}
