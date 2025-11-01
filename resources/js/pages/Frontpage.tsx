import FullWidthLayout from '@/layouts/FullWidthLayout';
import TitleBlock from '@/components/reusables/Blocks/TitleBlock';
import CategorySelectionBlock from '@/components/reusables/Blocks/CategorySelectionsBlock/Index';
import AuthTeaserBlock from '@/components/reusables/Blocks/AuthTeaserBlock';
import DailyRecommendationsBlock from '@/components/reusables/Blocks/DailyRecommendationsBlock';
import AlteringBlock from '@/components/reusables/Blocks/AlteringBlock';
import Seperator from '@/components/reusables/Seperator';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

import { FaRegHeart } from 'react-icons/fa6';
import { IoMdArrowForward } from 'react-icons/io';

/**
 * The frontpage of the application.
 *
 * This page is the root route of the application and displays
 * content blocks or seperators.
 *
 * @return {JSX.Element} The frontpage component.
 */
export default function Frontpage() {
    return (
        <FullWidthLayout title="Willkommen" showTitle={false}>
            <TitleBlock
                icon={<FaRegHeart className="text-primary size-6 mt-1" />}
                title="Willkommen"
                punchline="Was darf's sein?"
                children={
                    <Button asChild variant="primary">
                        <Link href={route('recipes.index')} title="Zu den Rezepten">
                            Zu den Rezepten
                            <IoMdArrowForward />
                        </Link>
                    </Button>
                }
            />
            <CategorySelectionBlock />
            <Seperator />
            <DailyRecommendationsBlock />
            <Seperator />
            <AuthTeaserBlock />
            <Seperator />
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="col-span-2 flex flex-col gap-2 items-center justify-center">
                    
                    
                </div>

                <div className="col-span-1 flex flex-col gap-2 items-center justify-center">
                    <h2 className="text-3xl">erprobte Rezepte</h2>
                    <h3 className="text-2xl text-gray-500 dark:text-gray-400 font-la-belle-aurore">
                        Probiert und gekocht
                    </h3>
                    
                </div>
            </div>
        </FullWidthLayout>
    );
}
