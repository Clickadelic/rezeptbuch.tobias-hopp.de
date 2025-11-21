import NoSidebarsLayout from '@/layouts/NoSidebarsLayout';
import { HiOutlineDotsVertical, HiOutlineDotsHorizontal } from 'react-icons/hi';
import TitleBlock from '@/components/reusables/Blocks/TitleBlock';
import Seperator from '@/components/reusables/Seperator';
import imgSrc from '@images/svg/File-synchronization-bro.svg';
import { MdOutlineInstallMobile } from 'react-icons/md';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { RiApps2AddLine } from 'react-icons/ri';
import { MdOutlineInstallDesktop } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { RxClipboardCopy } from 'react-icons/rx';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

/**
 * The contact page of the application.
 * Contains a contact form, a contact block, and a faq accordeon.
 *
 * @return {JSX.Element} The frontpage component.
 */
export default function AppInstallation() {
    const copyToClipboard = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigator.clipboard.writeText(window.location.origin);
        toast.success('Link kopiert', {
            duration: 3000,
        });
    };
    return (
        <NoSidebarsLayout
            title="App Installation"
            showTitle={false}
            description="Schritt für Schritt, die Rezeptbuch-App installieren. Jetzt erhältlich für iOS und Android."
        >
            <div className="w-full flex flex-col items-center justify-center gap-2">
                <TitleBlock
                    title="App Installation"
                    punchline="Eine App - alle Geräte."
                    icon={<AiOutlineAppstoreAdd className="text-primary size-6 mt-1" />}
                />
                <img src={imgSrc} className="w-84 mx-auto mb-8" alt="App-Installation Screen" />
                <p className="mb-5">
                    Hier findest Du die Anleitung zur Installation der Rezeptbuch-App für Dein
                    Smarphone. So geht's:
                </p>
                <ul className="list-decimal list-inside">
                    <li className="asd">
                        <p className="inline-flex">Drücke in Deinem mobilen Browser auf die Schaltfläche für weitere Einstellungen.</p>
                        <div className="flex gap-2 justify-center items-center my-5">
                            <HiOutlineDotsVertical className="text-primary size-9 mt-1 mx-auto" />
                            oder
                            <HiOutlineDotsHorizontal className="text-primary size-9 mt-1 mx-auto" />
                        </div>
                    </li>
                    <li className="asd">
                        <p className="inline-flex">Scrolle danach zu den Installationsoptionen im unteren Bereich und suche nach diesem Zeichen.</p>
                        <div className="p-10">
                            <div className="flex gap-2 justify-center items-center my-5">
                            <MdOutlineInstallMobile className="text-primary size-9 mt-1 mx-auto" />
                            
                            oder
                            <MdOutlineInstallDesktop className="text-primary size-9 mt-1 mx-auto" />
                        </div>
                        </div>
                    </li>
                    <li className="asd">
                        <p className="inline-flex">Klicke entweder auf "App installieren" oder auf "Verknüpfung hinzufügen".</p>
                        <div className="p-10">
                            <MdOutlineInstallMobile className="text-primary size-9 mt-1 mx-auto" />
                        </div>
                    </li>
                    <li className="flex flex-col items-center justify-center gap-2">
                        <p className="inline-flex">Die App wird installiert als sogenannte "Progressive Web App".</p>
                        <IoShieldCheckmarkOutline className="text-primary size-9 my-5 mx-auto" />
                        <p className="inline-flex">Fertig - viel Spaß. 🙂</p>
                    </li>
                </ul>
                <div className="w-full my-5 flex gap-1 flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 rounded-xl p-4 border-b border-gray-200 dark:border-gray-700">
                    <p>Dir gefällt die Rezeptbuch-App? Teile sie:</p>
                    <Button variant="link" onClick={copyToClipboard} className="text-lg flex gap-2">https://rezeptbuch.tobias-hopp.de<RxClipboardCopy className="text-primary size-9 mt-1 mx-auto" /></Button>
                </div>
            </div>
        </NoSidebarsLayout>
    );
}
