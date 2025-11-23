import AuthTeaserBlock from '@/components/reusables/Blocks/AuthTeaserBlock';
import FullWidthLayout from '@/layouts/FullWidthLayout';
import missionImpossibleBro from "@images/svg/Mission-Impossible-bro.svg";

export default function NotAuthorized() {
    return (
        <FullWidthLayout title="Nicht angemeldet?" description="Wenn Du nicht angemeldet bist, bist Du nicht angemeldet.">
            <div className="flex flex-col sm:flex-row-reverse justify-center items-center gap-5">
                <img src={missionImpossibleBro} className="w-full sm:w-1/2 max-w-96" alt="Mission Impossible - Nicht eingeloggt" />
                <div className="w-full flex flex-col justify-center items-center sm:w-1/2">
                    <h2 className="mb-3 text-xl">Du bist nicht eingeloggt und möchtest einen geschützen Bereich besuchen.</h2>
                    <p>Bitte melde Dich an, um Zugriff auf diese Seite zu erhalten.</p>
                    <AuthTeaserBlock />
                </div>
            </div>
        </FullWidthLayout>
    );
}
