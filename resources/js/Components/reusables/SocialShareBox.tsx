import { IoShareSocial } from 'react-icons/io5';
import { Link } from '@inertiajs/react';

export default function SocialShareBox() {
    return (
        <div>
            <h2 className="text-lg font-medium flex flex-row gap-2 mb-1.5">
                Teilen <IoShareSocial className="size-4 mt-1" />
            </h2>
            <p className="text-sm text-gray-500">Teile dieses Gericht mit Deinen Freunden.</p>
            <Link href="#">Share</Link>
        </div>
    );
}
