import { posts } from '@/lib/data';
import { notFound } from 'next/navigation';
import { PostContent } from '@/components/post-card';

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
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
