
import { Header } from '@/components/header';
import { NewsTicker } from '@/components/news-ticker';
import { posts } from '@/lib/data';
import { PostCard } from '@/components/post-card';
import { BlogSidebar } from '@/components/blog-sidebar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <NewsTicker posts={posts} />
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <main className="lg:col-span-2">
            <div className="space-y-8">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </main>
          <aside>
            <BlogSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
