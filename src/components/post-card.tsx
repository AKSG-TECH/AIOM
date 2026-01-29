'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { Post } from '@/lib/definitions';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Skeleton } from './ui/skeleton';
import { cn } from '@/lib/utils';

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Card className="overflow-hidden shadow-lg rounded-xl transition-shadow hover:shadow-2xl">
      <CardContent className="p-0">
        <div className="flex flex-col">
          <div className="relative aspect-[9/16] w-full bg-muted">
            <Link href={`/posts/${post.id}`}>
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className={cn(
                  'object-cover transition-opacity duration-500',
                  isLoaded ? 'opacity-100' : 'opacity-0'
                )}
                data-ai-hint={post.imageHint}
                sizes="(max-width: 768px) 100vw, 50vw"
                onLoad={() => setIsLoaded(true)}
              />
            </Link>
            {!isLoaded && <Skeleton className="absolute inset-0 rounded-none" />}
            <Link href={`/category/${post.category.toLowerCase()}`} className="absolute top-2 right-2 z-10">
                <Badge variant="secondary" className="font-semibold uppercase">{post.category}</Badge>
            </Link>
          </div>
          <div className="p-[7px] flex flex-col space-y-[7px] items-center">
            <h2 className="font-headline font-bold leading-tight w-full text-left">
              <Link href={`/posts/${post.id}`} className="hover:text-primary transition-colors text-xs">
                {post.title}
              </Link>
            </h2>
            <div className="w-full">
              <Button asChild className="w-full">
                <Link href={`/posts/${post.id}`}>Show prompt</Link>
              </Button>
            </div>
            <div className="flex items-center text-xs text-muted-foreground justify-center">
              <Link href="/contact-us" className="flex items-center gap-1 hover:text-primary transition-colors">
                <User className="w-3 h-3" />
                <span>By AIOM</span>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
