import { Head } from '@inertiajs/react';
import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import LegalSidebar from '@/components/sidebars/LegalSidebar';
import Seperator from '@/components/reusables/Seperator';

/**
 * Returns a SidebarLeftLayout component with a section containing text about equipment.
 *
 * This component is used to display information about the general equipment, kitchen utensils and alternatives.
 */
export default function Equipment() {
    return (
        <SidebarLeftLayout
            title="Ausstattung"
            description="Informationen zur allgemeinen Ausstattung, Küchenutensilien und Allem was dazu gehört."
            sidebar={<LegalSidebar />}
        >
            <section>
                <p>
                    Natürlich kann jedes Thema im Bereich Kochen und Küche ins Extreme
                    bezüglich Ausstattung und Küchentools ausarten. Hier ist primär das Ziel sein, mit einer
                    normalen, durchschnittlichen Küchenausstattung ein leckeres Essen oder einen
                    Drink zuzubereiten.
                </p>
                <br />
                <p>
                    Reguläre Dinge wie Töpfe, Pfannen, Teller usw. sind ja in der Regel vorhanden.
                    Dinge die darüber hinaus gehen wie z.B. Waffeleisen, Pizzaofen oder Konvektomat gehören dann
                    schon zum erweiterten Werkzeugkasten.
                </p>
                <br />
                <p>
                    Wenn's exotisch wird, steht eine alternative Zubereitungsmethode/Möglichkeit
                    dabei.
                </p>
            </section>
        </SidebarLeftLayout>
    );
}
