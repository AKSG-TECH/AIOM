
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Home, LayoutGrid, Video } from 'lucide-react';
import type { Post } from '@/lib/definitions';

export function StickyNav({ posts }: { posts: Post[] }) {
  const categories = [...new Set(posts.map(p => p.category))];
  const allCategories = [...categories, 'Favourites'];

  return (
    <nav className="sticky bottom-0 z-50 w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
      <div className="grid h-16 grid-cols-3">
        <Button asChild variant="ghost" className="flex h-full flex-col items-center justify-center gap-1 rounded-none">
          <Link href="/">
            <Home className="h-5 w-5" />
            <span className="text-xs font-medium">Home</span>
          </Link>
        </Button>
        <Button asChild variant="ghost" className="flex h-full flex-col items-center justify-center gap-1 rounded-none">
          <Link href="/category/videos">
            <Video className="h-5 w-5" />
            <span className="text-xs font-medium">Videos</span>
          </Link>
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="flex h-full flex-col items-center justify-center gap-1 rounded-none">
              <LayoutGrid className="h-5 w-5" />
              <span className="text-xs font-medium">Categories</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-auto">
            <SheetHeader>
              <SheetTitle>Categories</SheetTitle>
            </SheetHeader>
            <div className="grid gap-2 py-4">
              {allCategories.map(category => (
                <SheetClose asChild key={category}>
                  <Button variant="outline" asChild className="justify-center">
                    <Link
                      href={`/category/${category.toLowerCase()}`}
                      className="capitalize w-full"
                    >
                      {category.toLowerCase()}
                    </Link>
                  </Button>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
