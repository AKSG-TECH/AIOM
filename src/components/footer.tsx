import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t mt-auto">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PROMPT AIOM. All Rights Reserved.
          </div>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/contact-us" className="text-sm text-muted-foreground hover:text-primary">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
