import { IoShareSocial } from 'react-icons/io5';
import { Link } from '@inertiajs/react';
import { Button } from '../ui/button';

export default function SocialShareBox() {
    return (
        <Button className="rounded-lg">
            <IoShareSocial className="size-4" />
            Teilen
        </Button>
    );
}
