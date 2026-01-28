
import { NewsTicker } from '@/components/news-ticker';
import { posts } from '@/lib/data';
import { PostCard } from '@/components/post-card';
import { BlogSidebar } from '@/components/blog-sidebar';

export default function Home() {
  return (
    <>
      <NewsTicker posts={posts} />
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[7px]">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
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
