
import { Header } from '@/components/header';

export default function BoysPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-10 px-4">
        <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
            <h1 className="text-3xl font-bold font-headline">Boy's Posts</h1>
            <p className="text-muted-foreground mt-4">This page is under construction. Check back soon for posts in this category!</p>
        </div>
      </main>
    </>
  );
}
