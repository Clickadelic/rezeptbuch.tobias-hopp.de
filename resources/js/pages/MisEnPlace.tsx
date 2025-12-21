import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

import { Button } from '@/components/ui/button';

import MainSidebar from '@/components/sidebars/MainSidebar';
import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import TitleBlock from '@/components/reusables/Blocks/TitleBlock';
import Seperator from '@/components/reusables/Seperator';

import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2';
import { TbSalt } from 'react-icons/tb';
import { MdOutlineQueryStats } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa6';
import { IoMdArrowForward } from 'react-icons/io';

import { SharedPageProps } from '@/types';

/**
 * MisEnPlace Page (French for "everything in place")
 *
 * This page is the root route of the application and displays
 * content blocks or seperators.
 *
 * @return {JSX.Element} The frontpage component.
 */
export default function MisEnPlace() {
    return (
        <SidebarLeftLayout
            sidebar={<MainSidebar />}
            title="Mis en place"
            showTitle={false}
            description="Mis en place - französisch für Alles an seinem Platz (vor Arbeitsbeginn). Hier geht's um den Umgang mit Küchenutensilien und Lebensmitteln in der Küche."
        >
            <TitleBlock
                icon={<FaRegHeart className="text-primary size-6 mt-1" />}
                title="Mis en place"
                punchline="Alles an seinem Ort."
            />
            <p>Ordnung muss sein, auch in der Küche.</p>
        </SidebarLeftLayout>
    );
}
