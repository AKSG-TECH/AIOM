'use client';

import { posts } from '@/lib/data';
import { notFound } from 'next/navigation';
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
import type { Post } from '@/lib/definitions';

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

function PostContent({ post }: { post: Post }) {
    'use client';

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

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl py-10 px-4">
        <PostContent post={post} />
    </div>
  );
}
