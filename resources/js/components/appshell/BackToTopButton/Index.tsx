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
                className="inverted-corners animate ease-in-out duration-300 p-4 py-5 rounded-none rounded-bl rounded-br shadow-sm hover:shadow-lg z-10"
            >
                <IoIosArrowUp className="size-8" />
            </Button>
        </div>
    );
}
