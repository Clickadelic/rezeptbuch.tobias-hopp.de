import { GoZoomIn } from 'react-icons/go';
import { BiDish } from 'react-icons/bi';
import { LiaCocktailSolid } from 'react-icons/lia';
import { Recipe } from '@/types/Recipe';

import { TbSalad } from 'react-icons/tb';
import { PiCookingPot } from 'react-icons/pi';
import { RiCake3Line } from 'react-icons/ri';
import { GiCakeSlice } from 'react-icons/gi';
import { GiCrystalBars } from 'react-icons/gi';

interface CategoryIconSwitcher {
    recipe: Recipe
}

export default function CategoryIconSwitcher ({ recipe }: CategoryIconSwitcher) {
    let categoryIcon = <BiDish className="z-20 size-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-400" />
    switch (recipe?.category?.id) {
        case 1:
            categoryIcon = <TbSalad className="z-20 size-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            break;
        case 2:
            categoryIcon = <PiCookingPot className="z-20 size-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            break;
        case 3:
            categoryIcon = <RiCake3Line className="z-20 size-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            break;
        case 4:
            categoryIcon = <LiaCocktailSolid className="z-20 size-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            break;
        case 5:
            categoryIcon = <GiCakeSlice className="z-20 size-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            break;
        case 6:
            categoryIcon = <GiCrystalBars className="z-20 size-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            break;
    }
    return (
        <>
            {categoryIcon}
        </>
    )
}