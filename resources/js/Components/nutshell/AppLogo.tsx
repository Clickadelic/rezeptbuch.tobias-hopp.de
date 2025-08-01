import { Link } from '@inertiajs/react';
import { BsBookmarkHeart } from "react-icons/bs";

import { cn } from '@/lib/utils';

interface AppLogoProps {
    classNames?: string
    href?: string
    title?: string
}

const AppLogo = ({ classNames = '', href = '/', title = 'Toby\'s Rezeptbuch' }: AppLogoProps) => {
  return (
    <h1>
        <Link href={href} className={cn('flex flex-row justify-between gap-2 text-emerald-700 hover:text-emerald-600 max-w-[168px] mx-auto', classNames)} title={title}>
            <span><BsBookmarkHeart className="size-5 mt-1" /></span>
            <span className="mb-0 text-xl font-light">Toby's</span>
            <span className="mb-0 text-xl font-medium">Rezeptbuch</span>
        </Link>
    </h1>
  )
}

export default AppLogo