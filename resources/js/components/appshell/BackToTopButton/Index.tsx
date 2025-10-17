import { Button } from '@/components/ui/button';
import { IoIosArrowUp } from 'react-icons/io';
import './back-to-top-button.css';

export default function BackToTopButton() {
    return (
        <div className="relative w-full flex justify-center items-center">
            <Button
                title="Zurück nach oben"
                variant="primary"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inverted-corners absolute -bottom-5 animate ease-in-out duration-300 p-4 py-6 rounded-full shadow-sm hover:shadow-lg z-10"
            >
                <IoIosArrowUp className="size-8" />
            </Button>
        </div>
    );
}
