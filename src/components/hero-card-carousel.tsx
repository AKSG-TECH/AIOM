
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Post } from '@/lib/definitions';
import { useState } from 'react';
import { Skeleton } from './ui/skeleton';
import { cn } from '@/lib/utils';

type HeroCardCarouselProps = {
  posts: Post[];
};

function HeroCard({ post }: { post: Post }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Card className="overflow-hidden border-none shadow-2xl rounded-xl">
      <CardContent className="p-0 relative">
        <div className="relative aspect-[9/16] w-full bg-muted">
          {!isLoaded && <Skeleton className="absolute inset-0" />}
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className={cn(
              'object-cover transition-all duration-500',
              isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
            )}
            data-ai-hint={post.imageHint}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={() => setIsLoaded(true)}
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent space-y-3">
          <Badge variant="secondary" className="font-semibold uppercase">
            {post.category}
          </Badge>
          <h2 className="font-headline text-xs font-bold leading-tight text-primary-foreground">
            {post.title}
          </h2>
          <Link href={`/posts/${post.id}`} className="inline-block font-semibold text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            Continue Reading &gt;
          </Link>
        </div>

      </CardContent>
    </Card>
  );
}


export function HeroCardCarousel({ posts }: HeroCardCarouselProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full max-w-sm mx-auto"
    >
      <CarouselContent>
        {posts.map((post) => (
          <CarouselItem key={post.id}>
            <HeroCard post={post} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="h-10 w-10 text-white bg-black/20 hover:bg-black/40 border-none transition-colors -left-4">
        <ArrowLeft className="h-6 w-6" />
      </CarouselPrevious>
      <CarouselNext className="h-10 w-10 text-white bg-black/20 hover:bg-black/40 border-none transition-colors -right-4">
        <ArrowRight className="h-6 w-6" />
      </CarouselNext>
    </Carousel>
  );
}
