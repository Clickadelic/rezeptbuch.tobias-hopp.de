import { Head } from '@inertiajs/react';
import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import LegalSidebar from '@/components/sidebars/LegalSidebar';
import Seperator from '@/components/reusables/Seperator';

/**
 * Impressum – Rechtliche Informationen
 *
 * Dieses Impressum gilt für das private, nicht-kommerzielle Rezeptbuch-Projekt.
 */
export default function Equipment() {
    return (
        <SidebarLeftLayout title="Ausstattung" description="Informationen zur allgemeinen Ausstattung, Küchenutensilien und Allem was dazu gehört." sidebar={<LegalSidebar />}>
            <section>
                <p>Natürlich lässt sich jedes Thema im Bereich der Küche ins Extreme treiben. Hier ist primär das Ziel sein, mit einer normalen, durchschnittlichen Küchenausstattung ein leckeres Gericht oder etwas Anderes zuzubereiten.</p>
                <br />
                <p>Reguläre Dinge wie Töpfe, Pfannen, Teller usw. sollten ja bei jedem Zuhause vorhanden sein.</p>
                <br />
                <p>Wenn's exotisch wird, steht eine alternative Zubereitungsmethode/Möglichkeit dabei.</p>
            </section>
        </SidebarLeftLayout>
    );
}
