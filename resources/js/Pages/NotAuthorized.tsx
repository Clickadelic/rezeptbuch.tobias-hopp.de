import FullWidthLayout from '@/layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

import { TbSalt } from 'react-icons/tb';
import { FiPlus } from 'react-icons/fi';
import { BsJournalBookmark } from 'react-icons/bs';
import { LiaCocktailSolid } from 'react-icons/lia';

export default function NotAuthorized() {
    return (
        <>
            <Head title="Keine Berechtigung" />
            <FullWidthLayout title="Keine Berechtigung">
                <h2>Du hast keine Berechtigung für diesen Bereich - sorry.</h2>
                <p>Bitte wende Dich an den Admin, falls du mehr Berechtigungen haben solltest.</p>
            </FullWidthLayout>
        </>
    );
}
