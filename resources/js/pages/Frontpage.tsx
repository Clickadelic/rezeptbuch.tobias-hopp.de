import FullWidthLayout from '@/layouts/FullWidthLayout';
import TitleBlock from '@/components/reusables/Blocks/TitleBlock';
import CategoryBlock from '@/components/reusables/Blocks/CategoryBlock/Index';
import AuthTeaserBlock from '@/components/reusables/Blocks/AuthTeaserBlock';
import ChefkochBlock from '@/components/reusables/Blocks/ChefkochBlock';
import ContactBlock from '@/components/reusables/Blocks/ContactBlock';
import FaqAccordeon from '@/components/reusables/FaqAccordeon';
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
            <TitleBlock icon={<FaRegHeart className="text-primary size-6 mt-1" />} title="Willkommen" punchline="Was darf's sein?"  children={<Button asChild variant="primary"><Link href={route('recipes.index')} title="Zu den Rezepten">Zu den Rezepten<IoMdArrowForward /></Link></Button>} />
            <CategoryBlock />
            <Seperator />
            <AuthTeaserBlock />
            <Seperator />
            <ChefkochBlock />
            <Seperator style="info" />
            <FaqAccordeon />
            <Seperator style="mail" />
            <ContactBlock />
        </FullWidthLayout>
    );
}
