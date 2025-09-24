import FullWidthLayout from '@/layouts/FullWidthLayout';

export default function NotAuthorized() {
    return (
        <FullWidthLayout title="Keine Berechtigung">
            <h2>Du hast keine Berechtigung für diesen Bereich - sorry.</h2>
            <p>Bitte wende Dich an einen Admin, falls du mehr Berechtigungen haben solltest.</p>
        </FullWidthLayout>
    );
}
