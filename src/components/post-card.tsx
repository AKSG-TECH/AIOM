'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { Post } from '@/lib/definitions';
import { User, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Skeleton } from './ui/skeleton';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from '@/components/ui/textarea';

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

export function PostContent({ post }: { post: Post }) {
    const { toast } = useToast();
    const [isLoaded, setIsLoaded] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(post.content);
        toast({
        title: "copy",
        });
    };

    return (
        <article className="space-y-8">
            <div className="space-y-4">
            <Badge variant="secondary" className="font-semibold uppercase">
                {post.category}
            </Badge>
            <h1 className="text-xl md:text-2xl font-headline font-extrabold tracking-tight">
                {post.title}
            </h1>
            </div>
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-lg bg-muted">
            {!isLoaded && <Skeleton className="absolute inset-0 rounded-lg" />}
            <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className={cn(
                'object-cover transition-opacity duration-500',
                isLoaded ? 'opacity-100' : 'opacity-0'
                )}
                data-ai-hint={post.imageHint}
                onLoad={() => setIsLoaded(true)}
            />
            </div>

            <div className="text-center">
            <Dialog>
                <DialogTrigger asChild>
                <Button>Show prompt</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Prompt</DialogTitle>
                    <DialogDescription>
                    sawagat hai aapka hamre prompt ke ish website pe
                    </DialogDescription>
                </DialogHeader>
                <div className="my-4">
                    <Textarea
                    readOnly
                    value={post.content}
                    rows={8}
                    className="bg-muted resize-none"
                    />
                </div>
                <DialogFooter>
                    <Button onClick={handleCopy}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                    </Button>
                </DialogFooter>
                </DialogContent>
            </Dialog>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>{post.content}</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
                lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum
                ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin
                porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit
                amet erat.
            </p>
            <p>
                Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
                Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum
                bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim.
                Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede
                pellentesque fermentum. Maecenas adipiscing ante non diam.
            </p>
            </div>
        </article>
    );
}
