import { useState, useMemo } from 'react';

import Modal from '@/components/reusables/Modal';
import IconCategorySwitcher from '@/components/reusables/IconCategorySwitcher';
import { GoZoomIn } from 'react-icons/go';

import { Recipe } from '@/types/Recipe';
import { cn } from '@/lib/utils';

interface RecipeImageBlockProps {
    recipe: Recipe;
    className?: string;
    useModalWindow?: boolean;
}

/**
 * Displays the hero image of a recipe with a button to open the image in a modal.
 */
export default function RecipeImageBlock({ recipe, className, useModalWindow = false }: RecipeImageBlockProps) {
    
    const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
    const toggleImageModal = () => setIsImageModalOpen((prev) => !prev);

    const mediaArray = useMemo(() => recipe?.media ?? [], [recipe]);

    const hero = useMemo(() => {
        return mediaArray[0] ?? null;
    }, [mediaArray]);

    const sortedMedia = useMemo(() => {
        if (!hero) return mediaArray;
        return [hero, ...mediaArray.filter(m => m.id !== hero.id)];
    }, [mediaArray, hero]);

    return (
        <div
            className={cn(
                'relative z-0 flex flex-col items-center justify-center aspect-video w-full overflow-hidden rounded-xs',
                className
            )}
        >
            {hero ? (
                <div className="w-full h-auto flex rounded-lg overflow-hidden transition-colors duration-300">
                    <img
                        src={hero.url}
                        alt={recipe.name}
                        className="w-full h-full object-cover z-20"
                    />
                    {useModalWindow && (
                        <button
                            onClick={toggleImageModal}
                            type="button"
                            className="absolute inset-0 bg-transparent opacity-0 hover:opacity-100 transition ease-in-out z-30 cursor-pointer text-white"
                            title="Bild vergrößern"
                        >
                            <GoZoomIn className="w-5 h-5 absolute bottom-7 right-7" />
                        </button>
                    )}
                </div>
            ) : (
                <>
                    <IconCategorySwitcher recipe={recipe} />
                    <div className="absolute w-full h-full bg-gray-100 dark:bg-gray-900 border border-transparent border-b-gray-100 dark:border-b-gray-700 rounded-lg z-10"></div>
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
                        {sortedMedia.map((m) => (
                            <div key={m.id}>
                                <img
                                    src={m.url}
                                    alt={recipe.name}
                                    className="w-full rounded aspect-video object-cover mb-4"
                                />
                                <div className="w-full flex justify-between items-center gap-2 ms-3 mb-3">
                                    <div className="flex flex-col">
                                        <h5 className="font-medium text-gray-600 dark:text-gray-400">
                                            {recipe.punchline}
                                        </h5>
                                        <h4 className="font-medium text-gray-800 dark:text-gray-200">
                                            {recipe.name}
                                        </h4>
                                    </div>
                                    {/* FavoriteButton oder andere Controls können hier */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    );
}
