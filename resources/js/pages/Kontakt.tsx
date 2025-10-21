import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';

import ContactBlock from '@/components/reusables/Blocks/ContactBlock';
import FaqAccordeon from '@/components/reusables/FaqAccordeon';
import Seperator from '@/components/reusables/Seperator';
import { Link } from '@inertiajs/react';

/**
 * The contact page of the application.
 * Contains a contact form, a contact block, and a faq accordeon.
 *
 * @return {JSX.Element} The frontpage component.
 */
export default function ContactPage() {
    return (
        <SidebarLeftLayout title="Kontakt">
            <ContactBlock />
        </SidebarLeftLayout>
    );
}
