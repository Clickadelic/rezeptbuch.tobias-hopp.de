import FullWidthLayout from '@/layouts/FullWidthLayout';
import { usePage } from '@inertiajs/react';
import { SharedPageProps } from '@/types';
import { Category } from '@/types/Category';

import chefkoch from '@images/svg/Chef-Tobias.svg';


/**
 * The frontpage of the application.
 *
 * This page is the root route of the application and displays
 * a simple welcome message.
 *
 * @return {JSX.Element} The frontpage component.
 */
export default function Frontpage() {
    const categories = usePage<SharedPageProps>().props.categories;
    return (
        <FullWidthLayout title="Willkommen">
            <div className="flex flex-col sm:flex-row justify-start items-start gap-14">
                <img src={chefkoch} className="mt-5 size-72" alt="Chef Tobias" />
                <div className="flex flex-col gap-2">
                    <h2 className="my-6 text-3xl font-la-belle-aurore text-gray-800 dark:text-gray-300">
                        ... auf meinem Rezeptbuch.
                    </h2>
                    <p className="text-base">
                        Hier gibt's Rezepte und Cocktail's aus meinem Koch- bzw. Barbuch.
                    </p>
                    <p className="text-base">
                        Nicht immer findet man spontan eine Idee zum Kochen.
                    </p>
                    <p className="text-base">
                        Um ein kleines Nachschlagewerk zu haben, habe ich daher dieses Rezeptbuch
                        erstellt.
                    </p>
                    <p className="text-base">
                        Wer Lust hat, darf gerne Rezepte nachkochen, sich anmelden und eventuell
                        sogar mitmachen.
                    </p>
                    <p className="text-base">Viele Grüße und frohes Kochen.</p>
                    <p className="text-2xl font-la-belle-aurore mt-4">Toby</p>
                </div>
                <h1>Test</h1>
                {categories.map((category:Category) => {
                    return (
                        <div className="`flex flex-col gap-2" key={category.id}>
                            <h2 className="my-6 text-md text-gray-800 dark:text-gray-300">
                                {category.name}
                            </h2>
                            <p className="text-base">
                                {category.name}
                            </p>
                        </div>
                    );
                })}
            </div>
        </FullWidthLayout>
    );
}
