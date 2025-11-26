import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

import TitleBlock from '@/components/reusables/Blocks/TitleBlock';

import { FaRegHeart } from 'react-icons/fa6';
import { IoMdArrowForward } from 'react-icons/io';

interface WelcomeBlockProps {
    className?: string;
}

/**
 * A WelcomeBlock component.
 * This component displays a welcome message with a heart icon
 * and a subtitle asking if everything is alright.
 * It also contains a button to navigate to the recipes index page.
 * The component accepts a className prop.
 * @param {string} className - The class name of the component.
 * @returns {JSX.Element} - The WelcomeBlock component.
 */
export default function WelcomeBlock({ className }: WelcomeBlockProps) {
    return (
        <TitleBlock
            icon={<FaRegHeart className="text-primary size-6 mt-1" />}
            title="Willkommen"
            punchline="Was darf's sein?"
            className={className}
            children={
                <Button asChild variant="primary">
                    <Link
                        href={route('recipes.index')}
                        className="mt-5"
                        title="Zu den Rezepten"
                        aria-label="Zu den Rezepten"
                    >
                        Zu den Rezepten
                        <IoMdArrowForward />
                    </Link>
                </Button>
            }
        />
    );
}
