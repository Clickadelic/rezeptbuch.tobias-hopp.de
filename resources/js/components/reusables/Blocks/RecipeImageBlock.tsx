import { useState, useMemo } from 'react';

import Modal from '@/components/reusables/Modal';

import { GoZoomIn } from 'react-icons/go';
import { BiDish } from 'react-icons/bi';

import { Recipe } from '@/types/Recipe';
import { cn } from '@/lib/utils';


interface RecipeImageBlockProps {
    recipe: Recipe;
    className?: string
}

/**
 * Displays the hero image of a recipe with a button to open the image in a modal.
 *
 * @param {RecipeImageBlockProps} props - properties of the component
 * @returns {JSX.Element} - the rendered component
 */
export default function RecipeImageBlock({ recipe, className }: RecipeImageBlockProps) {
    
    const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);

    const hero = useMemo(() => {
        return recipe?.media?.find((m) => m?.pivot?.is_primary) ?? recipe?.media?.[0];
    }, [recipe]);

    const toggleImageModal = () => setIsImageModalOpen((prev) => !prev);

    return (
        <div className={cn("relative z-0 flex flex-col items-center justify-center aspect-video w-full xl:w-[96rem] overflow-hidden rounded-xl", className)}>
            {hero ? (
                <div className="relative w-full flex border border-transparent rounded-xl overflow-hidden hover:border-primary">
                    <img
                        src={hero.url}
                        alt={recipe.name}
                        className="w-full h-full object-cover z-20"
                    />
                    <button
                        onClick={toggleImageModal}
                        className="absolute inset-0 bg-transparent opacity-0 hover:opacity-100 transition ease-in-out z-30 cursor-pointer text-white hover:text-gray-300"
                        title="Bild vergrößern"
                    >
                        <GoZoomIn className="size-5 absolute bottom-7 right-7" />
                    </button>
                </div>
            ) : (
                <>
                    <BiDish className="z-20 size-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-400" />
                    <div className="absolute size-full bg-gray-100 dark:bg-gray-700 rounded-xl z-10 cursor-default"></div>
                </>
            )}

            {/* Modal für Bildanzeige */}
            <Modal
                show={isImageModalOpen}
                closeable
                maxWidth="6xl"
                onClose={() => setIsImageModalOpen(false)}
            >
                <div className="rounded-xl p-1 bg-white/30 dark:bg-gray-900/30">
                    <div className="p-2 bg-white dark:bg-gray-900 rounded-lg overflow-hidden flex flex-col">
                        {recipe.media?.map((m) => (
                            <div key={m.id}>
                                <img
                                    src={m.url}
                                    alt={recipe.name}
                                    className="w-full rounded aspect-video object-cover mb-4"
                                />
                                <div className="w-full ms-3 mb-3">
                                    <h5 className="font-medium text-gray-600 dark:text-gray-400">
                                        {recipe.punchline}
                                    </h5>
                                    <h4 className="font-medium text-gray-800 dark:text-gray-200">
                                        {recipe.name}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    );
}
