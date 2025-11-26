import TitleBlock from './TitleBlock';
import ContactForm from '@/components/forms/ContactForm';

import { MdOutlineAlternateEmail } from 'react-icons/md';
import { cn } from '@/lib/utils';

interface ContactBlockProps {
    className?: string;
}

/**
 * A ContactBlock component.
 * This component contains a TitleBlock and a ContactForm.
 * The TitleBlock displays a title, a punchline and an icon.
 * The ContactForm contains fields for name, email and message.
 * The component is wrapper in a div with a max width of xl.
 * The component accepts a className prop.
 * @param {string} className - The class name of the component.
 * @returns {JSX.Element} - The ContactBlock component.
 */
export default function ContactBlock({ className }: ContactBlockProps) {
    return (
        <div className={cn('max-w-xl mx-auto', className)}>
            <TitleBlock
                title="Kontakt"
                punchline="Du hast ein Anliegen? Schreib' Dein Feedback."
                icon={<MdOutlineAlternateEmail className="text-primary size-6 mt-1" />}
            />
            <ContactForm />
        </div>
    );
}
