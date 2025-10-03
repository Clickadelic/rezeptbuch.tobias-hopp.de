import { Recipe } from "@/types/Recipe"
import RecipeCard from "@/components/reusables/RecipeCard"
import "./carousel.css"
import { cn } from "@/lib/utils"

interface CarouselProps {
    wrapperClassname?: string
    carouselClassName?: string
    itemClassName?: string
    recipes?: Recipe[]
}

export default function Carousel ({ wrapperClassname, carouselClassName, itemClassName, recipes }: CarouselProps) {
    console.log("Carousel", recipes);
    return (
        <div className={cn("carousel-wrapper", recipes?.length === 0 && "empty", wrapperClassname)} id="custom-card-carousel">
            <ul className={cn("carousel", carouselClassName)}>
                {recipes?.map((recipe: Recipe) => (
                    <RecipeCard className={itemClassName} key={recipe.id} recipe={recipe} />
                ))}
            {recipes?.length === 0 && recipes?.map((recipe: Recipe) => (
                <li key="id_placeholder"><p>Lege das erste Rezept an.</p></li>
            ))}
            </ul>
        </div>
    )
}