import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <ThemeToggle />
      <Link
        href=""
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href=""
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Experiences
      </Link>
      <Link
        href=""
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Projects
      </Link>
      <Link
        href=""
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Blogs
      </Link>
    </nav>
  )
}