import { Link } from '@inertiajs/react';
import { BsBookmarkHeart } from "react-icons/bs";

const AppLogo = () => {
  return (
    <h1>
        <Link href="/" className="text-stone-900 flex flex-row justify-between gap-2 hover:text-emerald-700">
            <span className="text-la-belle-aurore">Toby&apos;s</span>
            <span>
                <BsBookmarkHeart className="mt-1" />
            </span>
            <span className="mb-0 font-medium">Rezeptbuch</span>
        </Link>
    </h1>
  )
}

export default AppLogo