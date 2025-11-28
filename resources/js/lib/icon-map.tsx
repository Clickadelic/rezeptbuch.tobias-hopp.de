import { PiCookingPot } from 'react-icons/pi';
import { LiaCocktailSolid } from 'react-icons/lia';
import { RiCake3Line } from 'react-icons/ri';
import { GiCakeSlice } from 'react-icons/gi';
import { TbSalad } from 'react-icons/tb';
import { GiCrystalBars } from 'react-icons/gi';

export const CategoryIconMap: Record<string, JSX.Element> = {
    vorspeise: <TbSalad className="size-4" />,
    hauptgericht: <PiCookingPot className="size-4" />,
    nachtisch: <RiCake3Line className="size-4" />,
    cocktail: <LiaCocktailSolid className="size-4" />,
    snack: <GiCrystalBars className="size-4" />,
    backen: <GiCakeSlice className="size-4" />,
};
