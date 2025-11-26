import { BiDish } from 'react-icons/bi';
import { LiaCocktailSolid } from 'react-icons/lia';
import { Recipe } from '@/types/Recipe';

import { TbSalad } from 'react-icons/tb';
import { PiCookingPot } from 'react-icons/pi';
import { RiCake3Line } from 'react-icons/ri';
import { GiCakeSlice } from 'react-icons/gi';
import { GiCrystalBars } from 'react-icons/gi';
import { cn } from '@/lib/utils';

interface CategoryIconSwitcher {
    recipe: Recipe;
    iconColor?: string;
}

export default function CategoryIconSwitcher({
    recipe,
    iconColor = 'text-gray-400',
}: CategoryIconSwitcher) {
    let categoryIcon = (
        <BiDish
            className={cn(
                'z-20 size-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                iconColor,
            )}
        />
    );
    switch (recipe?.category?.id) {
        case 1:
            categoryIcon = (
                <TbSalad
                    className={cn(
                        'z-20 size-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                        iconColor,
                    )}
                />
            );
            break;
        case 2:
            categoryIcon = (
                <PiCookingPot
                    className={cn(
                        'z-20 size-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                        iconColor,
                    )}
                />
            );
            break;
        case 3:
            categoryIcon = (
                <RiCake3Line
                    className={cn(
                        'z-20 size-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                        iconColor,
                    )}
                />
            );
            break;
        case 4:
            categoryIcon = (
                <LiaCocktailSolid
                    className={cn(
                        'z-20 size-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                        iconColor,
                    )}
                />
            );
            break;
        case 5:
            categoryIcon = (
                <GiCakeSlice
                    className={cn(
                        'z-20 size-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                        iconColor,
                    )}
                />
            );
            break;
        case 6:
            categoryIcon = (
                <GiCrystalBars
                    className={cn(
                        'z-20 size-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                        iconColor,
                    )}
                />
            );
            break;
    }
    return <>{categoryIcon}</>;
}
