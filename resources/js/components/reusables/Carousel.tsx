import { Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious } from "@/components/ui/carousel";

import RecipeCard from "./RecipeCard";

import { Recipe } from "@/types/Recipe";
import Paginated from "@/types/Paginated";

import { cn } from '@/lib/utils';

interface CustomCarouselProps {
    className?: string
    recipes: Paginated<Recipe>
}

export default function CustomCarousel({recipes, className}: CustomCarouselProps) {
    
    return (

        <Carousel className={cn("w-full", className)}>
            <CarouselContent>
                {recipes?.data.map((recipe: Recipe) => (
                    <CarouselItem key={recipe.id} className="basis-1/3">
                        <RecipeCard recipe={recipe} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    )
}