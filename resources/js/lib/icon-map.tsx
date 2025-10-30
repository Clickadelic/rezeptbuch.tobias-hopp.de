import { PiCookingPot } from 'react-icons/pi';
import { LiaCocktailSolid } from 'react-icons/lia';
import { RiCake3Line } from 'react-icons/ri';
import { GiCakeSlice } from 'react-icons/gi';
import { TbSalad } from 'react-icons/tb';
import { GiCrystalBars } from 'react-icons/gi';

export const IconMap: Record<string, JSX.Element> = {
    vorspeise: <TbSalad className="size-5" />,
    hauptgericht: <PiCookingPot className="size-5" />,
    nachtisch: <RiCake3Line className="size-5" />,
    cocktail: <LiaCocktailSolid className="size-5" />,
    snack: <GiCrystalBars className="size-5" />,
    backen: <GiCakeSlice className="size-5" />,
};
