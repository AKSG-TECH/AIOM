'use client';

import type { Post } from '@/lib/definitions';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
import { Copy } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { posts } from '@/lib/data';
import { PostCard } from './post-card';

export function PostPageView({ post }: { post: Post }) {
  const { toast } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);
  const recentPosts = posts.filter((p) => p.id !== post.id).slice(0, 4);


  const handleCopy = () => {
    navigator.clipboard.writeText(post.content);
    toast({
      title: "copy",
    });
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
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

          <div className="text-center space-y-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Show prompt</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Prompt</DialogTitle>
                  <DialogDescription>
                    Your prompt is ready to use go on any image Generator website like GEMINI, ChatGPT or Grok Ai to generate your image.
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
                  <Button asChild>
                    <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer">
                      Gemini
                    </a>
                  </Button>
                  <Button asChild>
                    <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">
                      ChatGPT
                    </a>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </article>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold font-headline mb-8 text-center">
          Recent Posts
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {recentPosts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
