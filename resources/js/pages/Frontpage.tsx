import FullWidthLayout from '@/layouts/FullWidthLayout';
import TitleBlock from '@/components/reusables/Blocks/TitleBlock';
import CategoryGrid from '@/components/reusables/CategoryGrid/Index';
import AuthTeaserBox from '@/components/reusables/AuthTeaserBlock';
import ChefkochBlock from '@/components/reusables/Blocks/ChefkochBlock';
import ContactBlock from '@/components/reusables/Blocks/ContactBlock';
import FaqAccordeon from '@/components/reusables/FaqAccordeon';
import Seperator from '@/components/reusables/Seperator';

import { FaRegHeart } from 'react-icons/fa6';

/**
 * The frontpage of the application.
 *
 * This page is the root route of the application and displays
 * a simple welcome message.
 *
 * @return {JSX.Element} The frontpage component.
 */
export default function Frontpage() {
    return (
        <FullWidthLayout title="Willkommen" showTitle={false}>
            <TitleBlock title="Willkommen" punchline="Was darf's sein?" icon={<FaRegHeart className="text-primary size-6 mt-1" />} />
            <CategoryGrid />
            <Seperator />
            <AuthTeaserBox />
            <Seperator />
            <ChefkochBlock />
            <Seperator style="info" />
            <FaqAccordeon />
            <Seperator style="mail" />
            <ContactBlock />
        </FullWidthLayout>
    );
}
