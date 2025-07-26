import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';

export default function Impressum() {
    return (
        <PublicLayout>
            <Head title="Impressum" />
            <div className="bg-white rounded p-4 my-4">
                <h2 className="text-3xl mb-3">Impressum</h2>
                <p>Die Domain{" "}<a href="https://kochbuch.tobias-hopp.de/" title="Toby' Kochbuch">https://kochbuch.tobias-hopp.de</a>{" "}und die damit verbundene Webseite wird betrieben von:</p>
                <ul className="my-4">
                    <li>Tobias Hopp</li>
                    <li>Oberer Markenweg 70</li>
                    <li>56566 Neuwied</li>
                    <li>Deutschland</li>
                    <li>Kontakt: <a href="mailto:mail@tobias-hopp.de" title="mail@tobias-hopp.de" className="text-emerald-800 hover:text-emerald-600">mail@tobias-hopp.de</a></li>
                </ul>
                <hr className="my-4" />
                <p className="open-sans">Die Webseite ist ein nicht-kommerzielles Nebenprojekt von Tobias Hopp und steht für jeden Besucher frei zur Verfügung.</p>
                <p>Tobias Hopp übernimmt keinerlei Haftung für eventuelle Schäden, welche durch die Nutzung dieser Webseite entstehen. Darin enhalten sind Haftungsansprüche, insbesondere Haftungsansprüche gegenüber Rezeptänderungen und deren Nutzung.</p>
                <hr className="my-4" />
                <h3 className="text-xl mb-3">Bildnachweise</h3>
                <ul className="list-styled">
                    <li>
                        <a href="https://www.pexels.com/de-de/foto/draufsicht-des-essens-1640772/" title="Foto von Ella Olsson" target="_blank">
                            Foto von Ella Olsson
                        </a>
                    </li>
                </ul>
            </div>
        </PublicLayout>
    );
}
