import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import MainSidebar from '@/components/sidebars/MainSidebar';
<<<<<<< HEAD
<<<<<<< HEAD
import GuideAccordeon from '@/components/reusables/GuideAccordeon';
=======
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@/components/ui/accordion';
import { Link } from '@inertiajs/react';

import TitleBlock from '@/components/reusables/Blocks/TitleBlock';
import GuideAccordeon from '@/components/reusables/GuideAccordeon';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
>>>>>>> 6a787f23 (Guide WIP)
=======
import GuideAccordeon from '@/components/reusables/GuideAccordeon';
>>>>>>> d85b01c4 (Guide)

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
