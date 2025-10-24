import { Button } from '@/components/ui/button';
import { RiSearchLine } from 'react-icons/ri';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import HeaderAlert from '@/components/appshell/HeaderAlert';
/**
 * A search bar for recipes.
 *
 * Displays a search bar with a text input and a submit button. The search bar is
 * responsive and will adjust its size based on the screen size.
 *
 * @returns {JSX.Element} The rendered search bar component.
 */
export default function RecipeSearch() {
    const [isBlurred, setIsBlurred] = useState<boolean>(false);

    return (
        <div
            className={cn(
                "relative w-full bg-[url('../images/ella-olsson-4dQiaWKiL-Y-unsplash.jpg')] dark:bg-[url('../images/pexels-fotios-photos-918328.jpg')] bg-cover bg-center flex flex-col justify-center items-center",
            )}
        >
            {/* <HeaderAlert /> */}
            <div
                className={cn(
                    'absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/10 dark:bg-gray-800/30 animate transition-all duration-200 ease opacity-0 pointer-events-none', // standard unsichtbar
                    isBlurred && 'backdrop-blur-sm opacity-100 pointer-events-auto',
                )}
            ></div>

            <div
                className={cn(
                    'shadow-sm lg:w-[28rem] z-20 bg-white/40 dark:bg-gray-800/30 flex flex-col gap-1 p-1 rounded mx-4 my-12 sm:my-16 md:my-20 lg:my-24 xl:my-32',
                )}
            >
                <form
                    method="GET"
                    action={route('recipes.search')}
                    className="flex flex-row justify-end items-center place-items-center bg-white dark:bg-gray-800 p-1 rounded space-x-1"
                >
                    <input
                        type="text"
                        name="search"
                        id="search"
                        autoComplete="off"
                        onFocus={() => setIsBlurred(true)}
                        onBlur={() => setIsBlurred(false)}
                        className="w-full text-base border-none rounded bg-white dark:bg-gray-800 dark:border border-transparent hover:border-primary text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-primary focus:ring-offset-white dark:focus:ring-offset-gray-800"
                        placeholder="Was suchst du?"
                    />
                    <Button
                        type="submit"
                        className="bg-primary dark:bg-primary dark:text-gray-200 rounded border-none p-3"
                        aria-label="Suchen"
                    >
                        <RiSearchLine className="size-6" />
                    </Button>
                </form>
            </div>
        </div>
    );
}
