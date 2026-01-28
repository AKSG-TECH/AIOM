
import { posts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/header';

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="container mx-auto max-w-4xl py-10 px-4">
        <article className="space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="font-semibold uppercase">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight">
              {post.title}
            </h1>
            <p className="text-muted-foreground text-lg">{post.date}</p>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={post.imageUrl.replace('/400/600', '/1200/675')}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={post.imageHint}
            />
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
      </div>
    </>
  );
}
