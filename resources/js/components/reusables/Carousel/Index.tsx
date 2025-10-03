import "./carousel.css"

import { Recipe } from "@/types/Recipe"
import RecipeCard from "@/components/reusables/RecipeCard"
import { cn } from "@/lib/utils"

interface CarouselProps {
    wrapperClassname?: string
    carouselClassName?: string
    itemClassName?: string
    recipes?: Recipe[]
}

/**
 * Carousel component.
 *
 * @param {string} [wrapperClassname] - Optional wrapper class name
 * @param {string} [carouselClassName] - Optional carousel class name
 * @param {string} [itemClassName] - Optional item class name
 * @param {Recipe[]} [recipes] - Recipes to display
 *
 * @returns {JSX.Element}
 */
export default function Carousel ({ wrapperClassname, carouselClassName, itemClassName, recipes }: CarouselProps) {
    return (
        <div className={cn("carousel-wrapper rounded-lg mb-12", recipes?.length === 0 && "carousel-empty", wrapperClassname)} id="custom-card-carousel">
            <ul className={cn("carousel flex w-full overflow-x-auto", carouselClassName)}>
                {recipes?.map((recipe: Recipe) => (
                    <RecipeCard className={itemClassName} key={recipe.id} recipe={recipe} />
                ))}
                {recipes?.length === 0 && (
                    <li key="id_placeholder"><p>Lege das erste Rezept an.</p></li>
                )}
            </ul>
        </div>
    )
}