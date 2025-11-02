import NoSidebarsLayout from '@/layouts/NoSidebarsLayout';
import errorImage from '@images/svg/404-error-with-person-looking-for-bro.svg';
import { Link } from '@inertiajs/react';

import { RiHomeLine } from 'react-icons/ri';
export default function NotFound() {
    return (
        <NoSidebarsLayout title="404 - Seite nicht gefunden" showTitle={false}>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
                <div className="col-span-2">
                    <img src={errorImage} alt="Chef Tobias" />
                </div>
                <div className="cols-span-1 sm:col-span-2 md:col-span-3 flex justify-center items-center">
                    <div className="flex flex-col items-start justify-center gap-3">
                        <h3 className="text-2xl my-5 font-la-belle-aurore">
                            Upsi...
                        </h3>
                        <h2 className="text-2xl text-gray-600 dark:text-gray-200">
                            Fehler 404 - Seite nicht gefunden.
                        </h2>
                        <p className="text-lg mb-5">Die Seite, die du suchst, konnte nicht gefunden werden.</p>

                    </div>
                </div>
            </div>
        </NoSidebarsLayout>
    );
}
