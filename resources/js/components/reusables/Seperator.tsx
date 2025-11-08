import { GiForkKnifeSpoon, GiKnifeFork } from 'react-icons/gi';
import { PiCookingPot } from 'react-icons/pi';
import { TbSalad, TbSalt } from 'react-icons/tb';
import { FaHeart, FaQuoteLeft } from 'react-icons/fa6';
import { GiWhisk } from 'react-icons/gi';
import { FaRegHeart } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';
import { PiCarrotLight } from "react-icons/pi";
import { LiaCocktailSolid } from 'react-icons/lia';
import { RiCake3Line } from 'react-icons/ri';
import { GiCakeSlice, GiCrystalBars } from 'react-icons/gi';
import { IoMailOpenOutline } from 'react-icons/io5';
import { BsJournalBookmark, BsInfoCircle, BsCardImage } from 'react-icons/bs';
import { GoCommentDiscussion } from 'react-icons/go';
import { TfiCommentAlt } from 'react-icons/tfi';

import { RxMixerVertical } from 'react-icons/rx';

import { Star } from 'lucide-react';
import { RxGear } from 'react-icons/rx';
import { GiScales } from 'react-icons/gi';
import { TfiControlShuffle } from 'react-icons/tfi';

import { cn } from '@/lib/utils';

interface SeparatorProps {
    size?: number;
    margin?: string;
    style?: string;
}

/**
 * A separator component with an icon centered above a horizontal line.
 * @example
 * <Separator size={8} style="carrot |check-circle | cocktail | comment | comment-alt | cooking-pot | ghost | journal | cake | info | image | muffin | mail | mix | quote | salad | salt | snack | star | scale | gear " />
 */
export default function Separator({ size = 5, style = 'fork-knife', margin }: SeparatorProps) {
    const baseStyle = { fontSize: `${size * 0.25}rem` };
    const iconColor = 'text-gray-400 dark:text-gray-700';
    let IconComponent = GiKnifeFork;

    switch (style) {
        case 'cake':
            IconComponent = GiCakeSlice;
            break;
        case 'carrot':
            IconComponent = PiCarrotLight;
            break;
        case 'check-circle':
            IconComponent = FiCheckCircle;
            break;
        case 'cocktail':
            IconComponent = LiaCocktailSolid;
            break;
        case 'comment':
            IconComponent = GoCommentDiscussion;
            break;
        case 'comment-alt':
            IconComponent = TfiCommentAlt;
            break;
        case 'cooking-pot':
            IconComponent = PiCookingPot;
            break;
        case 'journal':
            IconComponent = BsJournalBookmark;
            break;
        case 'info':
            IconComponent = BsInfoCircle;
            break;
        case 'image':
            IconComponent = BsCardImage;
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
        case 'shuffle':
            IconComponent = TfiControlShuffle;
            break;
        case 'gear':
            IconComponent = RxGear;
            break;
        case 'whisk':
            IconComponent = GiWhisk;
            break;
        case 'scale':
            IconComponent = GiScales;
            break;
        case 'star':
            IconComponent = Star;
            break;
        default:
            IconComponent = GiKnifeFork;
    }

    return (
        <div className={cn('relative my-2 sm:my-3 md:my-4 lg:my-5 mx-auto w-full max-w-[52rem] flex items-center justify-center', margin)}>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-200  dark:bg-gray-700"></div>
            <div className="relative z-10 p-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                <IconComponent className={cn(iconColor)} style={baseStyle} />
            </div>
        </div>
    );
}
