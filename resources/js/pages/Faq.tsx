import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

import { Button } from '@/components/ui/button';

import MainSidebar from '@/components/sidebars/MainSidebar';
import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import TitleBlock from '@/components/reusables/Blocks/TitleBlock';
import Seperator from '@/components/reusables/Seperator';

import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { TbSalt } from 'react-icons/tb';
import { MdOutlineQueryStats } from "react-icons/md";
import { FaRegHeart } from 'react-icons/fa6';
import { IoMdArrowForward } from 'react-icons/io';

import { SharedPageProps } from '@/types';

/**
 * Faq Page 
 *
 * This page shows some frequent questions and answers. It includes an accordeon.
 *
 * @return {JSX.Element} The frontpage component.
 */
export default function Faq() {
    return (
        <SidebarLeftLayout sidebar={<MainSidebar />} title="FAQ" showTitle={false} description="FAQ - französisch für Alles an seinem Platz (vor Arbeitsbeginn). Hier geht's um den Umgang mit Küchenutensilien und Lebensmitteln in der Küche.">
            <TitleBlock
                icon={<FaRegHeart className="text-primary size-6 mt-1" />}
                title="FAQ"
                punchline="Alles an seinem Ort."
            />
            
        </SidebarLeftLayout>
    );
}