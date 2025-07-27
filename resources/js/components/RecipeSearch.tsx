import { Button } from "@/components/ui/button";
import { RiSearchLine } from "react-icons/ri";

export default function RecipeSearch (){
    return (
        <section className="w-full h-48 lg:h-64 bg-[url('../images/slides/Spaghetti-Ingredients.jpg')] bg-cover bg-center flex flex-col justify-center items-center">
            <div className="bg-white/30 p-1 rounded w-96">
                <form className="flex flex-row justify-end bg-white p-1 rounded space-x-1">
                    <input type="text" className="w-full border-none rounded  focus:border-emerald-800" placeholder="Was essen wir heute?" />
                    <Button type="submit" className="bg-emerald-800 text-slate-100 rounded border-none px-3 py-2">
                        <RiSearchLine className="size-6" />
                    </Button>
                </form>
            </div>
        </section>
    )
}