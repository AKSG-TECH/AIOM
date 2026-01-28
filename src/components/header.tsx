
import { Menu, Facebook, Twitter, Send, Instagram, Youtube, Search } from 'lucide-react';
import { DarkModeToggle } from '@/components/dark-mode-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import Link from 'next/link';

export function Header() {
  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/category/boys', label: "BOYS" },
    { href: '/category/girls', label: "GIRLS" },
    { href: '/privacy-policy', label: 'PRIVACY POLICY' },
    { href: '/contact-us', label: 'CONTACT US' },
  ];

  const socialLinks = [
    { href: '#', icon: <Facebook size={18} /> },
    { href: '#', icon: <Twitter size={18} /> },
    { href: '#', icon: <Send size={18} /> },
    { href: '#', icon: <Instagram size={18} /> },
    { href: '#', icon: <Youtube size={18} /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        
        <div className="flex flex-1 items-center justify-start">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold uppercase font-headline text-lg">PROMPT AIOM</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground/80 text-foreground/60">
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden md:flex items-center space-x-2">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-foreground/60 hover:text-foreground/80">
                {link.icon}
              </a>
            ))}
            <DarkModeToggle />
            <Button variant="ghost" size="icon">
              <Search />
            </Button>
            <Button>Subscribe</Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  {navLinks.map(link => (
                     <SheetClose asChild key={link.href}>
                       <Link href={link.href} className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent transition-colors">
                         {link.label}
                       </Link>
                     </SheetClose>
                  ))}
                  <div className="flex justify-center space-x-4 pt-4">
                    {socialLinks.map((link, index) => (
                      <a key={index} href={link.href} className="text-foreground/60 hover:text-foreground/80">
                        {link.icon}
                      </a>
                    ))}
                  </div>
                  <div className="pt-4 flex justify-around items-center">
                    <DarkModeToggle />
                    <Button>Subscribe</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
