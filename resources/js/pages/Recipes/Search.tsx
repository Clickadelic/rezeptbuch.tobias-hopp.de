import FullWidthLayout from '@/layouts/FullWidthLayout';

/**
 * Displays a list of all searchresults.
 *
 */
export default function Search() {
    return (
        <FullWidthLayout title="Suche">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-5">
                <li>Resultlist</li>
            </ul>
        </FullWidthLayout>
    );
}
