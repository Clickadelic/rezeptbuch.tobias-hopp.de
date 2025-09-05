import { Button } from '@/Components/ui/button';
import { RiSearchLine } from 'react-icons/ri';

export default function RecipeSearch() {
    return (
        <div className="w-full h-48 lg:h-64 bg-[url('../images/slides/Spaghetti-Ingredients.jpg')] bg-cover bg-center flex flex-col justify-center items-center">
            <div className="bg-white/30 dark:bg-slate-800/30 dark:text-slate-200 p-1 rounded w-64 md:w-72 lg:w-96">
                <form className="flex flex-row justify-end items-center place-items-center bg-white dark:bg-slate-800 dark:text-slate-200 p-1 rounded space-x-1">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="w-full border-none rounded focus:border-primary bg-white dark:bg-slate-800 dark:text-slate-200"
                        placeholder="Was essen wir heute?"
                    />
                    <Button
                        type="submit"
                        className="bg-primary dark:bg-primary dark:text-slate-200 rounded border-none px-3 py-2"
                        aria-label="Suchen"
                    >
                        <RiSearchLine className="size-6" />
                    </Button>
                </form>
            </div>
        </div>
    );
}
