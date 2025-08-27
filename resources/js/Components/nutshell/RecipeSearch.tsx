import { Button } from "@/Components/ui/button";
import { RiSearchLine } from "react-icons/ri";

export default function RecipeSearch() {
    return (
        <div className="w-full h-48 lg:h-64 bg-[url('../images/slides/Spaghetti-Ingredients.jpg')] relative bg-cover bg-center flex flex-col justify-center items-center">
            {/* Schwarzes Overlay */}
            <div className="absolute inset-0 h-48 lg:h-64 bg-black/10 group-hover:bg-black/10 transition-opacity duration-500"></div>
            <div className=" p-1 rounded w-64 md:w-72 lg:w-96 relative z-50">
                <form className="flex flex-row justify-end items-center place-items-center bg-white p-1 rounded space-x-1">
                    <input type="text" name="search" id="search" className="w-full border-none rounded  focus:border-emerald-800" placeholder="Was essen wir heute?" />
                    <Button type="submit" className="bg-emerald-800 text-slate-100 rounded border-none px-3 py-2">
                        <RiSearchLine className="size-6" />
                    </Button>
                </form>
            </div>
        </div>
    )
}