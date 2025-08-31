import { Link, usePage } from "@inertiajs/react";
import { RiHomeLine } from "react-icons/ri";
import { ChevronRight } from "lucide-react"; // ShadCN Icons

const BreadcrumbNav = () => {
  const { url } = usePage(); // aktueller Pfad z.B. /gerichte/1/edit

  // Split path und filtern leere Strings
  const segments = url.split("/").filter(Boolean);

  // Pfade für Links zusammensetzen
  const crumbs = segments.map((segment, idx) => {
    const path = "/" + segments.slice(0, idx + 1).join("/");
    // Format: ersetze Bindestriche durch Leerzeichen, groß schreiben
    const name = segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    return { name, path };
  });

  return (
    <div className="mx-auto container px-6">
      <ul className="flex items-center gap-2 text-sm text-slate-700 border-b border-slate-300 py-3">
        {/* Home */}
        <li>
          <Link href="/" className="hover:text-emerald-700">
            <RiHomeLine className="inline mb-1" />
          </Link>
        </li>

        {crumbs.map((crumb, idx) => (
          <li key={idx} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-1 text-slate-400" />
            {/* Letztes Segment nicht als Link */}
            {idx === crumbs.length - 1 ? (
              <span className="text-slate-500">{crumb.name}</span>
            ) : (
              <Link href={crumb.path} className="hover:text-emerald-700">
                {crumb.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreadcrumbNav;
