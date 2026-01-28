
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { Post } from '@/lib/definitions';
import { Calendar, User } from 'lucide-react';

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg rounded-xl transition-shadow hover:shadow-2xl">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="sm:col-span-1 relative aspect-video sm:aspect-[4/3]">
            <Image
              src={post.imageUrl.replace('/400/600', '/600/450')}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={post.imageHint}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
          <div className="sm:col-span-2 p-6 flex flex-col justify-center space-y-3">
            <Badge variant="secondary" className="font-semibold uppercase w-fit">{post.category}</Badge>
            <h2 className="font-headline text-xl md:text-2xl font-bold leading-tight">
              <Link href={`/posts/${post.id}`} className="hover:text-primary transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-muted-foreground text-sm line-clamp-2">{post.content}</p>
            <div className="pt-2">
              <Link href={`/posts/${post.id}`} className="font-semibold text-sm text-primary hover:underline">
                Read More
              </Link>
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
