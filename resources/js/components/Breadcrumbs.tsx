import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  url: string | null;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => {
  return (
    <nav className={cn("text-sm text-muted-foreground", className)} aria-label="Breadcrumb">
      <ol className="flex items-center gap-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {index > 0 && <ChevronRight className="w-4 h-4 text-muted-foreground" />}
            {item.url ? (
              <Link
                href={item.url}
                className="hover:underline text-foreground"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
