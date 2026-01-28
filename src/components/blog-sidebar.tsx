
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { posts } from '@/lib/data';
import Link from 'next/link';

export function BlogSidebar() {
  const categories = [...new Set(posts.map(p => p.category))];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Search</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex gap-2">
            <Input placeholder="Search..." />
            <Button type="submit">Search</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {posts.slice(0, 5).map(post => (
              <li key={post.id}>
                <Link href={`/posts/${post.id}`} className="hover:text-primary font-medium text-sm">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Comments</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No comments to show.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map(category => {
              const href = `/category/${category.toLowerCase()}`;
              return (
                <li key={category}>
                  <Link href={href} className="hover:text-primary capitalize">
                    {category.toLowerCase()}
                  </Link>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
