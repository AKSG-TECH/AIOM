
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export function BlogSidebar() {
  const allDisplayCategories = ['BOYS', 'GIRLS', 'VIDEOS', 'Favourites'];

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
            {allDisplayCategories.map(category => {
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
