import { Header } from '@/components/header';
import { NewsTicker } from '@/components/news-ticker';
import { HeroCardCarousel } from '@/components/hero-card-carousel';
import { posts } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <NewsTicker posts={posts} />
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8">
        <HeroCardCarousel posts={posts} />
      </main>
    </div>
  );
}
