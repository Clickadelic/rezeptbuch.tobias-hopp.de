import NoSidebarsLayout from '@/layouts/NoSidebarsLayout';

import TitleBlock from '@/components/reusables/Blocks/TitleBlock';
import { AiOutlineAppstoreAdd } from "react-icons/ai";
/**
 * The contact page of the application.
 * Contains a contact form, a contact block, and a faq accordeon.
 *
 * @return {JSX.Element} The frontpage component.
 */
export default function AppInstallation() {
    return (
        <NoSidebarsLayout title="App Installation" showTitle={false} description="Schritt für Schritt, die Rezeptbuch-App installieren. Jetzt erhältlich für iOS und Android.">
            <TitleBlock title="App Installation" icon={<AiOutlineAppstoreAdd className="text-primary size-6 mt-1" />} />
        </NoSidebarsLayout>
    );
}