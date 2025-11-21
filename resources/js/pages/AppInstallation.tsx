import NoSidebarsLayout from '@/layouts/NoSidebarsLayout';
import { HiOutlineDotsVertical, HiOutlineDotsHorizontal } from 'react-icons/hi';
import TitleBlock from '@/components/reusables/Blocks/TitleBlock';
import Seperator from '@/components/reusables/Seperator';
import imgSrc from '@images/svg/File-synchronization-bro.svg';
import { MdOutlineInstallMobile } from 'react-icons/md';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { RiApps2AddLine } from 'react-icons/ri';

/**
 * The contact page of the application.
 * Contains a contact form, a contact block, and a faq accordeon.
 *
 * @return {JSX.Element} The frontpage component.
 */
export default function AppInstallation() {
    return (
        <NoSidebarsLayout
            title="App Installation"
            showTitle={false}
            description="Schritt für Schritt, die Rezeptbuch-App installieren. Jetzt erhältlich für iOS und Android."
        >
            <div className="w-full flex gap-3 justify-start items-center">
                <TitleBlock
                    title="App Installation"
                    punchline="Einfach auf Dein Smartphone"
                    icon={<AiOutlineAppstoreAdd className="text-primary size-6 mt-1" />}
                />

                <div className="w-full flex flex-col items-center justify-center gap-2">
                    <img src={imgSrc} className="w-96 mx-auto" alt="Chef Tobias" />
                    <p>
                        Im Folgenden findest Du die Anleitung zur Installation der App auf Dein
                        Smarphone.
                    </p>
                    <br />
                    <p>
                        Drücke in Deinem mobilen Browser auf die Schaltfläche für weitere
                        Einstellungen.
                    </p>
                    <div className="flex gap-2 justify-between items-center">
                        <div className="w-full">
                            <div className="flex flex-col gap-2 justify-center items-center">
                                <HiOutlineDotsVertical className="text-primary size-9 mt-1 mx-auto" />
                                oder
                                <HiOutlineDotsHorizontal className="text-primary size-9 mt-1 mx-auto" />
                            </div>
                            <div className="rounded-lg p-10 border border-primary">
                                <MdOutlineInstallMobile className="text-primary size-9 mt-1 mx-auto" />
                            </div>
                        </div>
                        <div className="w-full">asd</div>
                        <div className="w-full">asd</div>
                    </div>
                </div>
            </div>
        </NoSidebarsLayout>
    );
}
