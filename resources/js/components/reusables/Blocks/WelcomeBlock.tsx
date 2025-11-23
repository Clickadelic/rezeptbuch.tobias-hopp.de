import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

import TitleBlock from "@/components/reusables/Blocks/TitleBlock";

import { FaRegHeart } from 'react-icons/fa6';
import { IoMdArrowForward } from 'react-icons/io';

export default function WelcomeBlock (){
    return (
        <TitleBlock
            icon={<FaRegHeart className="text-primary size-6 mt-1" />}
            title="Willkommen"
            punchline="Was darf's sein?"
            children={
                <Button asChild variant="primary">
                    <Link href={route('recipes.index')} title="Zu den Rezepten">
                        Zu den Rezepten
                        <IoMdArrowForward />
                    </Link>
                </Button>
            }
        />
    )
}