import { usePage } from '@inertiajs/react';

import FullWidthLayout from '@/layouts/FullWidthLayout';
import { TfiCommentsSmiley } from 'react-icons/tfi';

import { Recipe } from '@/types/Recipe';
import { SharedPageProps } from '@/types';

/**
 * The Dashboard page displays a variety of information about the user's recipes.
 * It includes a bar chart that shows the number of recipes, a donut chart that shows the distribution of recipes between the user and other users, and two tables that show the user's recipes and favorites.
 */
export default function Admin() {
    // Extract the data from the page
    const {} = usePage<SharedPageProps>().props;

    const { user } = usePage<SharedPageProps>().props.auth;

    return (
        <FullWidthLayout title="Admin">
            <div className="grid grid-cols-1 xl:grid-cols-12 grid-rows-2 xl:grid-rows-1 gap-2 xl:gap-5 mb-2 xl:mb-5">
                <div className="col-span-1 xl:col-span-3">
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg flex justify-between items-center cursor-default">
                            <span className="flex gap-2">
                                <TfiCommentsSmiley className="size-4 mt-1 text-primary rotate-y-180" />{' '}
                                Hi {user?.name}
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        </FullWidthLayout>
    );
}
