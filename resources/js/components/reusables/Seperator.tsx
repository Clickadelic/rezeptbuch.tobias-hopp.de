import { GiForkKnifeSpoon, GiKnifeFork } from 'react-icons/gi';
import { PiCookingPot } from 'react-icons/pi';
import { TbSalad, TbSalt } from 'react-icons/tb';
import { FaHeart } from 'react-icons/fa6';
import { GiWhisk } from "react-icons/gi";
import { FaRegHeart } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';

import { LiaCocktailSolid } from 'react-icons/lia';
import { RiCake3Line } from 'react-icons/ri';
import { GiCakeSlice, GiCrystalBars } from 'react-icons/gi';
import { IoMailOpenOutline } from 'react-icons/io5';
import { BsJournalBookmark, BsInfoCircle } from 'react-icons/bs';
import { GoCommentDiscussion } from 'react-icons/go';
import { TfiCommentAlt } from 'react-icons/tfi';
import { RxMixerVertical } from "react-icons/rx";
import { FaQuoteLeft } from 'react-icons/fa6';
import { cn } from '@/lib/utils';

interface SeparatorProps {
    size?: number;
    style?:
        | 'journal'
        | 'check-circle'
        | 'check'
        | 'comment'
        | 'comment-alt'
        | 'cake'
        | 'cocktail'
        | 'cooking-pot'
        | 'fork-knife-spoon'
        | 'fork-knife'
        | 'info'
        | 'muffin'
        | 'mix'
        | 'mail'
        | 'salad'
        | 'heart-outline'
        | 'heart'
        | 'quote'
        | 'snack'
        | 'salt'
        | 'whisk';
}

/**
 * A separator component with an icon centered above a horizontal line.
 *
 * @example
 * <Separator size={8} style="cooking-pot | comment | comment-alt | check-circle | fork-knife | fork-knife-spoon | quote | snack | mix | heart | heart-outline | journal | comment | comment-alt | cake | cocktail | info | muffin | mail | salad | salt " />
 */
export default function Separator({ size = 5, style = 'fork-knife' }: SeparatorProps) {
    // Tailwind Formula
    const baseStyle = {
        fontSize: `${size * 0.25}rem`, // flexible scaling
    };

    const iconColor = 'text-gray-400 dark:text-gray-700';

    let IconComponent = GiKnifeFork;
    switch (style) {
        case 'journal':
            IconComponent = BsJournalBookmark;
            break;
        case 'comment':
            IconComponent = GoCommentDiscussion;
            break;
        case 'comment-alt':
            IconComponent = TfiCommentAlt;
            break;
        case 'cake':
            IconComponent = GiCakeSlice;
            break;
        case 'check-circle':
            IconComponent = FiCheckCircle;
            break;
        case 'cocktail':
            IconComponent = LiaCocktailSolid;
            break;
        case 'cooking-pot':
            IconComponent = PiCookingPot;
            break;
        case 'info':
            IconComponent = BsInfoCircle;
            break;
        case 'muffin':
            IconComponent = RiCake3Line;
            break;
        case 'mail':
            IconComponent = IoMailOpenOutline;
            break;
        case 'fork-knife':
            IconComponent = GiKnifeFork;
            break;
        case 'fork-knife-spoon':
            IconComponent = GiForkKnifeSpoon;
            break;
        case 'heart-outline':
            IconComponent = FaRegHeart;
            break;
        case 'salad':
            IconComponent = TbSalad;
            break;
        case 'salt':
            IconComponent = TbSalt;
            break;
        case 'mix':
            IconComponent = RxMixerVertical;
            break;
        case 'heart':
            IconComponent = FaHeart;
            break;
        case 'quote':
            IconComponent = FaQuoteLeft;
            break;
        case 'snack':
            IconComponent = GiCrystalBars;
            break;
        case 'whisk':
            IconComponent = GiWhisk;
            break;
        default:
            IconComponent = GiKnifeFork;
    }

    return (
        <div className="relative my-3 md:my-6 mx-auto w-full max-w-[52rem] flex items-center justify-center">
            {/* Linie */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-200  dark:bg-gray-700"></div>

            {/* Icon mit Overlay-Hintergrund */}
            <div className="relative z-10 p-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                <IconComponent className={cn(iconColor)} style={baseStyle} />
            </div>
        </div>
    );
}
