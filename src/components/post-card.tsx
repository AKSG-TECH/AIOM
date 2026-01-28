
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { Post } from '@/lib/definitions';
import { Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg rounded-xl transition-shadow hover:shadow-2xl">
      <CardContent className="p-0">
        <div className="flex flex-col">
          <div className="relative aspect-[9/16] w-full">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={post.imageHint}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-6 flex flex-col space-y-3">
            <Badge variant="secondary" className="font-semibold uppercase w-fit">{post.category}</Badge>
            <h2 className="font-headline text-base font-bold leading-tight">
              <Link href={`/posts/${post.id}`} className="hover:text-primary transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-muted-foreground text-sm line-clamp-2">{post.content}</p>
            <div className="pt-2">
              <Button asChild>
                <Link href={`/posts/${post.id}`}>Show prompt</Link>
              </Button>
            </div>
            <div className="flex items-center text-xs text-muted-foreground pt-2 space-x-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-3 h-3" />
                <span>By MY AI</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
