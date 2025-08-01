import { BsBookmarkHeart } from "react-icons/bs";
import { Link } from "@inertiajs/react";

export default function AppLogo() {
    return (
        <h1>
            <Link href="/" className="text-stone-900 flex flex-row justify-between gap-2 hover:text-emerald-700 max-w-[168px] mx-auto">
                <BsBookmarkHeart className="size-5 mt-1" />
                <span className="mb-0 text-xl font-light">Toby's</span>
                <span className="mb-0 text-xl font-medium">Rezeptbuch</span>
            </Link>
        </h1>
    );
}
