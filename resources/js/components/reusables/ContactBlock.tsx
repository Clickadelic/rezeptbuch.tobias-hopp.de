import { SVGAttributes } from 'react';
import TitleBlock from "./TitleBlock";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";

import ContactForm from "../forms/ContactForm";



export default function ContactBlock () {
    return (
        <div className="max-w-xl mx-auto">
            <TitleBlock title="Kontakt" punchline="Feedback ist willkommen" icon={<MdOutlineAlternateEmail className="text-primary size-6 mt-1" />} />
            <ContactForm />
        </div>
    );
}