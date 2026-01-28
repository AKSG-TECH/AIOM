
'use client';

import { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Post } from '@/lib/definitions';
import { cn } from '@/lib/utils';

export function NewsTicker({ posts }: { posts: Post[] }) {
  const [isPaused, setIsPaused] = useState(false);

  const TickerItem = ({ title, date }: { title: string; date: string }) => (
    <div className="flex items-center space-x-4 flex-shrink-0 px-4">
      <span className="font-medium text-sm text-foreground/80">{title}</span>
      <span className="text-xs text-muted-foreground">{date}</span>
    </div>
  );

  const tickerContent = posts.map((post) => (
    <TickerItem key={post.id} title={post.title} date={post.date} />
  ));

  return (
    <div className="border-b bg-secondary/50">
      <div className="container flex items-center h-12">
        <div className="flex items-center mr-4 flex-shrink-0">
          <div className="bg-accent rounded-md px-3 py-1 flex items-center">
            <div className="w-2 h-2 rounded-full bg-white mr-2" />
            <span className="text-white font-bold text-sm uppercase">Top Stories</span>
          </div>
        </div>

        <div className="flex-grow overflow-hidden relative h-full">
          <div
            className={cn(
              'absolute inset-y-0 left-0 flex items-center animate-marquee',
              { 'animate-none': isPaused }
            )}
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            <div className="flex flex-shrink-0">
                {tickerContent}
            </div>
            <div className="flex flex-shrink-0">
                {tickerContent}
            </div>
          </div>
        </div>

        <div className="ml-4 flex-shrink-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? 'Play ticker' : 'Pause ticker'}
          >
            {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
