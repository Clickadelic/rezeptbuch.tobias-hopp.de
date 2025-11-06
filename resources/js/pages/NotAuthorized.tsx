import FullWidthLayout from '@/layouts/FullWidthLayout';

export default function NotAuthorized() {
    return (
        <FullWidthLayout title="Keine Berechtigung">
            <h2 className="font-la-belle-aurore">Du bist wahrscheinlich nicht eingeloggt, oder es ist ein Fehler passiert.</h2>
            <p>Bitte wende Dich an einen Admin, falls du mehr Berechtigungen haben solltest.</p>
        </FullWidthLayout>
    );
}
