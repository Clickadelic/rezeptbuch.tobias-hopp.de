
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { BsBookmarkHeart } from 'react-icons/bs';

export default function Seperator() {
    return (
        <div className="relative mx-auto w-full max-w-[52rem] flex items-center justify-center my-32">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-20">
                <GiKnifeFork className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8 text-gray-200 dark:text-gray-700" />
            </div>
            <div className="absolute top-1/2 left-0 right-0 w-full bg-gray-200 dark:bg-gray-600 h-px z-10"></div>
        </div>
    );
}