import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import MainSidebar from '@/components/sidebars/MainSidebar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@/components/ui/accordion';
import { Link } from '@inertiajs/react';

import TitleBlock from '@/components/reusables/Blocks/TitleBlock';
import GuideAccordeon from '@/components/reusables/GuideAccordeon';
import { ArrowRight } from 'lucide-react';
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
