import { Button } from '@/components/ui/button';
import { RiSearchLine } from 'react-icons/ri';
import { useState } from 'react';
import { useBlurStore } from '@/stores/useBlurStore';

import { cn } from '@/lib/utils';

export default function RecipeSearch() {
    const [isFocused, setIsFocused] = useState(false);
    const { isBlurred } = useBlurStore();

    const blurred = isFocused || isBlurred;

    return (
        <div
            className={cn(
                "relative w-full bg-[url('../images/ella-olsson-4dQiaWKiL-Y-unsplash.jpg')] dark:bg-[url('../images/pexels-fotios-photos-918328.jpg')] bg-cover bg-center flex flex-col justify-center items-center",
            )}
        >
            <div
                className={cn(
                    'absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/10 dark:bg-gray-800/30 transition-all duration-300 ease opacity-0 pointer-events-none',
                    blurred && 'backdrop-blur-sm opacity-100 pointer-events-auto',
                )}
            ></div>

            <div
                className={cn(
                    'shadow-sm lg:w-[28rem] z-20 bg-white/40 dark:bg-gray-800/30 flex flex-col gap-1 p-1 rounded mx-4 my-12 sm:my-20 md:my-28 lg:my-32 xl:my-40',
                )}
            >
                <form
                    method="GET"
                    action={route('recipes.search')}
                    className="flex flex-row justify-end items-center bg-white dark:bg-gray-800 p-1 rounded gap-1"
                >
                    <input
                        type="text"
                        name="search"
                        id="search"
                        autoComplete="off"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="w-full text-lg border-none rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-primary"
                        placeholder="Was essen wir heute?"
                    />
                    <Button
                        type="submit"
                        className="bg-primary dark:bg-primary dark:text-gray-200 rounded border-none py-5.5 px-4"
                        aria-label="Suchen"
                    >
                        <RiSearchLine className="size-7" />
                    </Button>
                </form>
            </div>
        </div>
    );
}
