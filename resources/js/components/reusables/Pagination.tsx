import { Link } from "@inertiajs/react";
import { cn } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronUp } from "lucide-react";
import { HiOutlineDotsVertical, HiOutlineDotsHorizontal } from 'react-icons/hi';
interface PaginationProps {
    className?: string;
    links: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
    onPageClick?: (link: string) => void;
    loading?: boolean;
}

export default function Pagination({ className, links }: PaginationProps) {
    // Entferne ggf. "Previous" / "Next" aus den Links, falls vorhanden
    const cleanLinks = links.filter(
        (l) => !l.label.toLowerCase().includes("previous") && !l.label.toLowerCase().includes("next")
    );

    const showEllipsis = cleanLinks.length > 5;
    const firstPages = showEllipsis ? cleanLinks.slice(0, 3) : cleanLinks;
    const lastPages = showEllipsis ? cleanLinks.slice(-2) : [];

    return (
        <div className={cn("flex items-center justify-center space-x-2", className)}>
            {firstPages.map((link, i) => (
                <PageLink key={i} link={link} />
            ))}

            {showEllipsis && (
                <DropdownMenu>
                    <DropdownMenuTrigger
                        className="hover:cursor-pointer px-3 py-1 text-sm rounded bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-white flex items-center gap-1"
                    >
                    <HiOutlineDotsHorizontal className="size-5" />
                    <span className="sr-only">Weitere Seiten</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" side="top">
                        {cleanLinks.slice(3, -2).map((link, i) => (
                            <DropdownMenuItem key={i} asChild>
                                <Link
                                    href={link.url || "#"}
                                    className={cn(
                                        "block w-full text-sm px-2 py-1 rounded",
                                        link.active
                                            ? "bg-primary text-white"
                                            : "hover:bg-gray-100 dark:hover:bg-gray-900 "
                                    )}
                                    aria-label="Weitere Links"
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            )}

            {lastPages.map((link, i) => (
                <PageLink key={i} link={link} />
            ))}
        </div>
    );
}

function PageLink({ link }: { link: { url: string | null; label: string; active: boolean } }) {
    return (
        <Link
            href={link.url || "#"}
            className={cn(
                "px-3 py-1 text-sm rounded transition-colors duration-200",
                link.active
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-white",
                !link.url && "pointer-events-none opacity-90"
            )}
            dangerouslySetInnerHTML={{ __html: link.label }}
        />
    );
}
