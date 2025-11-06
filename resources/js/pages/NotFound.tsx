import NoSidebarsLayout from '@/layouts/NoSidebarsLayout';
import errorImage from '@images/svg/404-error-with-person-looking-for-bro.svg';
import { Link } from '@inertiajs/react';

import { RiHomeLine } from 'react-icons/ri';
export default function NotFound() {
    return (
        <NoSidebarsLayout title="404 - Seite nicht gefunden" showTitle={false}>
            <div className="w-full flex flex-col sm:flex-row gap-8 items-center justify-center sm:my-12 md:my-24 lg:my-32">
                <img src={errorImage} className="w-full sm:w-1/2" alt="Chef Tobias" />
                <div className="sm:w-1/2">
                    <h3 className="text-2xl my-5 font-la-belle-aurore">
                        Upsi...
                    </h3>
                    <h2 className="text-2xl text-gray-600 dark:text-gray-200">
                        Fehler 404 - Seite nicht gefunden.
                    </h2>
                    <p className="text-lg mb-5">Die Seite, die du suchst, konnte nicht gefunden werden.</p>
                </div>
            </div>
        </NoSidebarsLayout>
    );
}
