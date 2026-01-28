import { Skeleton } from '@/components/ui/skeleton';

function PostCardSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="aspect-[9/16] w-full rounded-xl" />
      <div className="space-y-2 p-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-4 w-1/3 mx-auto" />
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <>
      <div className="border-b bg-secondary/50">
        <div className="container flex items-center h-12">
            <Skeleton className="h-8 w-32" />
            <div className="flex-grow overflow-hidden relative h-full ml-4">
               <Skeleton className="h-6 w-full" />
            </div>
        </div>
      </div>
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {Array.from({ length: 8 }).map((_, i) => (
                <PostCardSkeleton key={i} />
              ))}
            </div>
          </div>
          <aside className="hidden lg:block">
            <div className="space-y-8">
              <Skeleton className="h-40 w-full rounded-xl" />
              <Skeleton className="h-64 w-full rounded-xl" />
              <Skeleton className="h-32 w-full rounded-xl" />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
