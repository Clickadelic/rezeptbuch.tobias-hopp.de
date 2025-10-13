import { Link, usePage } from '@inertiajs/react';
import { SharedPageProps } from '@/types';

import FullWidthLayout from '@/layouts/FullWidthLayout';
import AuthTeaserBox from '@/components/reusables/AuthTeaserBlock';
import CategoryGrid from '@/components/reusables/CategoryGrid/Index';
import TitleBlock from '@/components/reusables/TitleBlock';
import Carousel from '@/components/reusables/Carousel/Index';
import FaqAccordeon from '@/components/reusables/FaqAccordeon';
import Seperator from '@/components/reusables/Seperator';
import { IoMailOpenOutline } from "react-icons/io5";
import chefkoch from '@images/svg/Chef-Tobias.svg';

import { FaCircleCheck, FaHeadphones, FaRegHeart } from 'react-icons/fa6';
import ContactBlock from '@/components/reusables/ContactBlock';
import AlteringBlock from '@/components/reusables/AlteringBlock';


/**
 * The frontpage of the application.
 *
 * This page is the root route of the application and displays
 * a simple welcome message.
 *
 * @return {JSX.Element} The frontpage component.
 */
export default function Frontpage() {
    const recipes = usePage<SharedPageProps>().props.recipes;
    return (
        <FullWidthLayout title="Willkommen" showTitle={false}>
            <TitleBlock title="Willkommen" punchline="Was darf's sein?" icon={<FaRegHeart className="text-primary size-6 mt-1" />} />
            <CategoryGrid />
            <Seperator />
            <AuthTeaserBox />
            <Seperator />
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="col-span-1 flex flex-col gap-2 items-center justify-center">
                    <h2 className="text-3xl">Tagestipps</h2>
                    <h3 className="text-2xl text-gray-500 dark:text-gray-400 font-la-belle-aurore">vom Chef persönlich</h3>
                    <img src={chefkoch} className="w-full mx-auto sm:w-1/2 md:w-3/4" alt="Chef Tobias" />
                </div>
                <Carousel wrapperClassname="lg:mt-40 col-span-2" carouselClassName="gap-5 rounded-lg bg-white dark:bg-gray-800" itemClassName="card" recipes={recipes?.data} />
            </div>
            <Seperator style="info" />
            <FaqAccordeon />
            <Seperator style="mail" />
            <ContactBlock />
        </FullWidthLayout>
    );
}