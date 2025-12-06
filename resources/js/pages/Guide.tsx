import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import MainSidebar from '@/components/sidebars/MainSidebar';
import GuideAccordeon from '@/components/reusables/GuideAccordeon';

import TitleBlock from '@/components/reusables/Blocks/TitleBlock';
import { FaQ } from 'react-icons/fa6';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
/**
 * Leitfaden – Informationen zur Benutzung
 */
export default function Leitfaden() {
    return (
        <SidebarLeftLayout
            title="Leitfaden zur Benutzung"
            showTitle={false}
            description="Hinweise und Details zur Verwendung des Rezeptbuchs."
            sidebar={<MainSidebar />}
        >
            <GuideAccordeon />
        </SidebarLeftLayout>
    );
}
