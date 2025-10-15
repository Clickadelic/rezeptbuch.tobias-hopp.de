import { cn } from '@/lib/utils';
import GridLinkItem from './GridLinkItem';
import { TbSalad } from 'react-icons/tb';
import { PiCookingPot } from 'react-icons/pi';
import { RiCake3Line } from 'react-icons/ri';
import { LiaCocktailSolid } from 'react-icons/lia';
import { GiCakeSlice, GiCrystalBars } from 'react-icons/gi';

/**
 * A component that displays a grid of categories with links to search for recipes that match that category.
 * The categories are hardcoded and are: Vorspeisen, Hauptgerichte, Nachtisch, Cocktails, Backen, and Snacks.
 */

export default function CategoryGrid() {
    return (
        <div className={cn('bg-gray-200 dark:bg-gray-700 transition-all duration-500 ease my-8')}>
            <ul
                className={cn('grid grid-cols-2 lg:grid-cols-3 gap-px')}
                aria-roledescription="navigation"
            >
                <li>
                    <GridLinkItem
                        icon={<TbSalad className="size-6 text-primary" />}
                        title="Vorspeisen"
                        punchline="für den kleinen Hunger"
                        buttonText="Zu den Vorspeisen"
                        href={route('recipes.search', { search: 'Vorspeise' })}
                    />
                </li>
                <li>
                    <GridLinkItem
                        icon={<PiCookingPot className="size-6 text-primary" />}
                        title="Hauptgerichte"
                        punchline="für den großen Hunger"
                        buttonText="Zu den Hauptgerichten"
                        href={route('recipes.search', { search: 'Hauptgericht' })}
                    />
                </li>
                <li>
                    <GridLinkItem
                        icon={<RiCake3Line className="size-6 text-primary" />}
                        title="Nachtisch"
                        punchline="für ein süßes Ende"
                        buttonText="Zum Nachtisch"
                        href={route('recipes.search', { search: 'Nachtisch' })}
                    />
                </li>
                <li>
                    <GridLinkItem
                        icon={<LiaCocktailSolid className="size-6 text-primary" />}
                        title="Cocktails"
                        punchline="für einen schönen Abend"
                        buttonText="Zu den Cocktails"
                        href={route('recipes.search', { search: 'Cocktail' })}
                    />
                </li>
                <li>
                    <GridLinkItem
                        icon={<GiCakeSlice className="size-6 text-primary" />}
                        title="Backen"
                        punchline="für eine gute Zeit"
                        buttonText="Zum Backen"
                        href={route('recipes.search', { search: 'Backen' })}
                    />
                </li>
                <li>
                    <GridLinkItem
                        icon={<GiCrystalBars className="size-6 text-primary" />}
                        title="Snacks"
                        punchline="für zwischendurch"
                        buttonText="Zu den Snacks"
                        href={route('recipes.search', { search: 'Snack' })}
                    />
                </li>
            </ul>
        </div>
    );
}
