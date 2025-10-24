import { useState } from 'react';
import { usePage } from '@inertiajs/react';

import Avatar from '@/components/reusables/Avatar';
import Modal from '@/components/reusables/Modal';
import RelatedRecipesCarousel from '@/components/reusables/RelatedRecipesCarousel';
import Seperator from '@/components/reusables/Seperator';
import SingleRecipeIngredientsTable from '@/components/reusables/Tables/SingleRecipeIngredientsTable';
import ContextMenu from '@/components/reusables/ContextMenu';
import CommentsDirectory from '@/components/reusables/CommentsDirectory';
import CommentList from '@/components/reusables/CommentList';
import { StarRating } from '@/components/forms/StarRating';
import { IconMap } from '@/lib/icon-map';

import { GoClock, GoZoomIn } from 'react-icons/go';
import { LuUtensilsCrossed } from 'react-icons/lu';
import { BiDish } from 'react-icons/bi';
import { VscSymbolEvent } from 'react-icons/vsc';
import { GiBroccoli } from "react-icons/gi";

import { Recipe } from '@/types/Recipe';
import { SharedPageProps } from '@/types';
import { toHumanDate } from '@/lib/utils';

interface ShowRecipeProps {
    recipe: Recipe;
}

export default function SingleRecipeView({ recipe }: ShowRecipeProps) {
    
    const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
    const { related, comments } = usePage<SharedPageProps>().props;
    
    const { user } = usePage<SharedPageProps>().props.auth;
    const avatar = './storage/' + user?.avatar;

    const toggleImageModal = () => {
        setIsImageModalOpen(!isImageModalOpen);
    };
    
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col xl:flex-row justify-start gap-5">
                <div className="relative z-0 flex flex-col items-center justify-center aspect-video w-full xl:w-[96rem] overflow-hidden rounded-xl">
                    {(() => {
                        const hero =
                            (recipe as any)?.media?.find((m: any) => m?.pivot?.is_primary) ??
                            (recipe as any)?.media?.[0];
                        return hero ? (
                            <div className="relative flex border border-transparent rounded-xl overflow-hidden hover:border-primary">
                                <img
                                    src={hero.url}
                                    alt={recipe.name}
                                    className="z-20"
                                />
                                <button
                                    className="bg-transparent opacity-0 absolute top-0 left-0 right-0 bottom-0 w-full h-full transition ease-in-out z-20 hover:cursor-pointer text-white hover:text-gray-400 dark:hover:text-gray-300"
                                    onClick={toggleImageModal}
                                >
                                    <GoZoomIn className="size-5 absolute bottom-7 right-7" />
                                </button>
                            </div>
                        ) : (
                            <>
                                <BiDish className="z-20 size-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-400" />
                                <div className="absolute size-full bg-gray-100 dark:bg-gray-700 rounded-xl z-10 cursor-default"></div>
                            </>
                        );
                    })()}
                </div>
                <div className="w-full flex flex-col justify-between gap-5">
                    <div className="flex flex-col items-start gap-1">
                        <div className="w-full flex flex-col">
                            <div className="relative w-full flex flex-row justify-between items-center">
                                <div>
                                    <h4 className="font-medium text-sm  text-gray-400 dark:text-gray-600">
                                        {recipe.punchline}
                                    </h4>
                                    <h3 className="font-medium text-2xl mb-3">{recipe.name}</h3>
                                </div>
                                <ContextMenu recipe={recipe} dotStyle="vertical" />
                            </div>
                            <p className="mb-3 text-gray-800 dark:text-gray-200">
                                {recipe.description}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <div className="w-24 aspect-video gap-2 cursor-default flex flex-col rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 justify-between items-center p-3">
                            {IconMap[recipe.category?.slug ?? ''] ?? (
                                <LuUtensilsCrossed className="size-5 text-primary" />
                            )}
                            <p className=" text-gray-600 dark:text-gray-200 text-sm">
                                {recipe.category?.name}
                            </p>
                        </div>
                        <div className="w-24 aspect-video gap-2 cursor-default flex flex-col rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 justify-between items-center p-3">
                            <VscSymbolEvent className="size-5 text-primary" />
                            <p className=" text-gray-600 dark:text-gray-200 text-sm">
                                {recipe.difficulty}
                            </p>
                        </div>
                        <div className="w-24 aspect-video gap-2 cursor-default flex flex-col rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 justify-between items-center p-3">
                            <GoClock className="size-5 text-primary" />
                            <p className=" text-gray-600 dark:text-gray-200 text-sm">
                                {recipe.preparation_time} Minuten
                            </p>
                        </div>
                        {recipe.is_veggy && (
                            <div className="w-24 aspect-video gap-2 cursor-default flex flex-col rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 justify-between items-center p-3">
                                <GiBroccoli className="size-5 text-primary" />
                                <p className=" text-gray-600 dark:text-gray-200 text-sm">
                                    vegetarisch
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <div>
                            <Avatar url={recipe?.user?.avatar} />
                        </div>
                        <div>
                            <h3 className="font-medium text-lg">von {recipe.user?.name}</h3>
                            <p className="text-sm text-gray-400 dark:text-gray-600">
                                {toHumanDate(recipe.created_at)}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <StarRating rating={recipe.rating ?? 1} maxRating={5} showLabel={true} />
                    </div>
                </div>
            </div>
            <Seperator style="scale" />
            {recipe.ingredients && recipe.ingredients.length > 0 && (
                <>
                    <SingleRecipeIngredientsTable recipe={recipe} />
                    <Seperator style="whisk" />
                </>
            )}
            {recipe.preparation_instructions && (
                <div className="flex">
                    <div className="w-full max-w-4xl mx-auto flex flex-col gap-2">
                        <h4 className="font-medium text-xl">Zubereitung</h4>
                        <div className="flex flex-col gap-2">
                            <p>{recipe.preparation_instructions}</p>
                        </div>
                    </div>
                </div>
            )}
            {/* <CommentsDirectory commentData={comments} recipeId={recipe.id!} /> */}
            <CommentList recipeId={recipe.id!} />
            <Seperator />
            <RelatedRecipesCarousel related={related as Recipe[]} categoryName={recipe.category?.name} />
            <Modal
                show={isImageModalOpen}
                closeable={true}
                maxWidth="6xl"
                onClose={() => setIsImageModalOpen(false)}
            >
                <div className="rounded-xl p-1 bg-white/30 dark:bg-gray-900/30">
                    <div className="p-2 bg-white dark:bg-gray-900 rounded-lg overflow-hidden flex flex-col">
                        {recipe.media?.map((m) => (
                            <div key={m.id}>
                                {/* TODO: Fix the image fix */}
                                <img
                                    src={m.url}
                                    alt={recipe.name}
                                    className="inset size-full rounded aspect-video object-cover mb-4"
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
