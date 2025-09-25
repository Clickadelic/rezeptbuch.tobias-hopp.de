import { router, usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { GoClock, GoTrash } from 'react-icons/go';
import { VscSymbolEvent } from 'react-icons/vsc';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MdOutlineEdit } from 'react-icons/md';
import { BiDish } from 'react-icons/bi';
import { assetPath } from '@/lib/utils';
import { Recipe } from '@/types/Recipe';
import { Skeleton } from '@/components/ui/skeleton';
import { GoUpload } from 'react-icons/go';
interface RecipeCardProps {
    recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
    const user = usePage().props.auth?.user;

    // TODO: Implement User RoleGate for Action buttons
    const deleteRecipe = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (confirm('Willst du dieses Rezept wirklich löschen?')) {
            router.delete(route('recipes.destroy', recipe.id));
        }
    };

    return (
        <li className="group w-full max-w-96 mb-5">
            <Link href={route('recipes.show', recipe.slug)} className="block" title={recipe.name}>
                <Card className="relative overflow-hidden">
                    <CardHeader
                        className="relative flex flex-col items-center justify-center aspect-video overflow-hidden p-0 rounded-xl 
                                    bg-gray-100 dark:bg-gray-700 text-gray-400 
                                    border border-transparent transition-colors duration-300 
                                    group-hover:bg-gray-200 dark:group-hover:bg-gray-700 group-hover:border-primary shadow-transparent hover:shadow-primary"
                    >
                        {/* Hero image */}
                        {(() => {
                            const hero =
                                (recipe as any)?.media?.find((m: any) => m?.pivot?.is_primary) ??
                                (recipe as any)?.media?.[0];
                            return hero ? (
                                <img
                                    src={hero.url ?? `/storage/${hero.path}`}
                                    alt={recipe.name}
                                    className="absolute inset-0 size-full object-cover"
                                />
                            ) : (
                                <BiDish className="size-10" />
                            );
                        })()}

                        {user && (
                            <DropdownMenu>
                                <DropdownMenuTrigger
                                    className="absolute top-2 right-2 text-gray-400 dark:text-gray-200 p-1 hover:text-gray-300 hover:cursor-pointer shadow-transparent z-20"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <HiOutlineDotsVertical className="size-4" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                        <Link
                                            href={route('recipes.edit', recipe.id)}
                                            className="flex flex-row items-center"
                                            onClick={(e) => e.stopPropagation()} // Link soll nur Edit öffnen
                                        >
                                            <MdOutlineEdit className="size-5 mr-2" />
                                            Bearbeiten
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        className="text-red-500 flex items-center"
                                        onClick={deleteRecipe} // Delete mit stopPropagation
                                    >
                                        <GoTrash className="size-5 mr-2" />
                                        Löschen
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                    </CardHeader>

                    {/* Titel */}
                    <CardContent className="p-2 block text-lg font-medium transition-colors duration-500 ease-in-out group-hover:text-primary leading-snug">
                        <h4 className="text-gray-500 dark:text-gray-400 text-base font-oswald line-clamp-1">
                            {recipe.punchline}
                        </h4>
                        <h3 className="group-hover:text-primary line-clamp-2 text-gray-800 dark:text-gray-200 min-h-[calc(3rem+2px)]">
                            {recipe.name}
                        </h3>
                    </CardContent>

                    {/* Footer */}
                    <CardFooter className="flex flex-row items-center justify-between space-x-2">
                        <div>
                            <GoClock className="inline-flex size-4 mr-1 text-primary" />
                            <span className="text-sm text-muted-foreground">
                                {recipe.preparation_time} Min.
                            </span>
                        </div>
                        <div>
                            <VscSymbolEvent className="inline-flex size-4 mr-1 text-primary" />
                            <span className="text-sm text-muted-foreground lowercase">
                                {recipe.difficulty}
                            </span>
                        </div>
                    </CardFooter>
                </Card>
            </Link>
        </li>
    );
}

function RecipeCardSkeleton() {
    return (
        <li className="w-full max-w-96 mb-5">
            <Card className="relative overflow-hidden">
                <CardHeader
                    className="relative flex flex-col items-center justify-center aspect-video overflow-hidden p-0 rounded-xl 
                                bg-gray-100 dark:bg-gray-700 text-gray-400 
                                border border-transparent transition-colors duration-300 
                                group-hover:bg-gray-200 group-hover:border-primary shadow-transparent hover:shadow-primary"
                >
                    <Skeleton className="absolute inset-0 size-full object-cover" />
                </CardHeader>

                <CardContent className="p-2 block text-lg font-medium transition-colors duration-500 ease-in-out group-hover:text-primary leading-snug">
                    <h4 className="text-gray-500 dark:text-gray-400 text-base font-oswald line-clamp-1">
                        <Skeleton className="w-1/2" />
                    </h4>
                    <h3 className="group-hover:text-primary line-clamp-2 text-gray-800 dark:text-gray-200 min-h-[calc(3rem+2px)]">
                        <Skeleton className="w-1/2" />
                    </h3>
                </CardContent>

                <CardFooter className="flex flex-row items-center justify-between space-x-2">
                    <div>
                        <GoClock className="inline-flex size-4 mr-1 text-primary" />
                        <Skeleton className="w-1/2" />
                    </div>
                    <div>
                        <VscSymbolEvent className="inline-flex size-4 mr-1 text-primary" />
                        <Skeleton className="w-1/2" />
                    </div>
                </CardFooter>
            </Card>
        </li>
    );
}
