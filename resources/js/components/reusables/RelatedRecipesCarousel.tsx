import Carousel from '@/components/reusables/Carousel/Index';
import Seperator from '@/components/reusables/Seperator';

import { Recipe } from '@/types/Recipe';
import { cn } from '@/lib/utils';

interface RelatedRecipesCarouselProps {
    categoryName?: string;
    recipes: Recipe[];
    className?: string;
    itemClassName?: string;
    carouselClassName?: string;
}

/**
 * A carousel component that displays related recipes from a given category.
 *
 * @param {string} [categoryName] - The name of the category to display
 * @param {Recipe[]} related - The related recipes to display
 * @returns {JSX.Element} - The carousel component
 */
export default function RelatedRecipesCarousel({ recipes, categoryName, className, carouselClassName, itemClassName }: RelatedRecipesCarouselProps) {
    return (
        <>
            <Seperator style="shuffle" />
            <div className={cn('flex flex-col gap-5 mb-12', className)}>
                <h4 className="text-xl">Weiteres aus der Kategorie: {categoryName}</h4>
                <Carousel
                    recipes={recipes}
                    carouselClassName={cn(
                        'gap-5 rounded-lg bg-white dark:bg-gray-800',
                        carouselClassName,
                    )}
                    itemClassName={cn('card', itemClassName)}
                />
            </div>
        </>
    );
}
