import Carousel from '@/components/reusables/Carousel/Index';
import { Recipe } from '@/types/Recipe';

interface RelatedRecipesCarouselProps {
    categoryName?: string;
    related: Recipe[];
}

/**
 * A carousel component that displays related recipes from a given category.
 *
 * @param {string} [categoryName] - The name of the category to display
 * @param {Recipe[]} related - The related recipes to display
 * @returns {JSX.Element} - The carousel component
 */
export default function RelatedRecipesCarousel({
    related,
    categoryName,
}: RelatedRecipesCarouselProps) {
    return (
        <div className="flex flex-col gap-5 mb-12">
            <h4 className="text-xl">Weiteres aus der Kategorie: {categoryName}</h4>
            <Carousel
                recipes={related}
                carouselClassName="gap-5 rounded-lg bg-white dark:bg-gray-800"
                itemClassName="card"
            />
        </div>
    );
}
