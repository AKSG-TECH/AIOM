'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { Post } from '@/lib/definitions';
import { Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Skeleton } from './ui/skeleton';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    try {
      const favourites: string[] = JSON.parse(localStorage.getItem('favouritePosts') || '[]');
      setIsFavourite(favourites.includes(post.id));
    } catch (error) {
      console.error("Failed to parse favourites from localStorage", error);
      setIsFavourite(false);
    }
  }, [post.id]);

  const handleFavouriteToggle = () => {
    try {
      const favourites: string[] = JSON.parse(localStorage.getItem('favouritePosts') || '[]');
      let updatedFavourites: string[];
      
      const isCurrentlyFavourite = favourites.includes(post.id);

      if (isCurrentlyFavourite) {
        updatedFavourites = favourites.filter(id => id !== post.id);
        toast({
          title: "Removed from Favourites",
          description: `"${post.title}" has been removed from your favourites.`,
        });
      } else {
        updatedFavourites = [...favourites, post.id];
        toast({
          title: "Saved to Favourites",
          description: `"${post.title}" has been saved to your favourites.`,
        });
      }
      
      localStorage.setItem('favouritePosts', JSON.stringify(updatedFavourites));
      setIsFavourite(!isCurrentlyFavourite);
    } catch (error) {
       console.error("Failed to update favourites in localStorage", error);
       toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Could not update your favourites.",
       });
    }
  };


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
            <div className="flex items-center gap-1 w-full">
              <Button asChild className="flex-grow">
                <Link href={`/posts/${post.id}`}>Show prompt</Link>
              </Button>
              <Button variant="outline" size="icon" onClick={handleFavouriteToggle} aria-label="Save favourite">
                <Heart className={cn("transition-colors", isFavourite ? "fill-destructive text-destructive" : "")} />
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
