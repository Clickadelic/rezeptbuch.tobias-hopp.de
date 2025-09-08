import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import DishesSidebar from '@/components/sidebars/MainSidebar';
import { Dish } from '@/types/Dish';
import { assetPath } from '@/lib/utils';
import { Link } from '@inertiajs/react';

import { MdOutlineStarPurple500 } from 'react-icons/md';
import { MdOutlineEdit } from 'react-icons/md';
import { GoClock, GoTrash } from 'react-icons/go';
import { VscSymbolEvent } from 'react-icons/vsc';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { BiDish } from 'react-icons/bi';

interface ShowDishProps {
    dish: Dish;
}

/**
 * Displays a single dish with its details.
 *
 * @param {ShowDishProps} props
 * @prop {Dish} dish - The dish to display.
 *
 * @returns {JSX.Element}
 */
export default function Show({ dish }: ShowDishProps) {
    const { props } = usePage();
    const { user } = props.auth;
    const { ingredients } = props;
    console.log(props);
    return (
        <>
            <Head title="Gericht Details" />
            <SidebarLeftLayout title="Gericht Details" sidebar={<DishesSidebar />}>
                Cocktail Show
            </SidebarLeftLayout>
        </>
    );
}
