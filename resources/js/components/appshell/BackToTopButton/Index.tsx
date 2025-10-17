import { Button } from '@/components/ui/button';
import { IoIosArrowUp } from 'react-icons/io';
import './back-to-top-button.css';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
export default function BackToTopButton() {
    return (
        <div className="relative w-full flex justify-center items-center">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                        variant="primary"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="inverted-corners animate ease-in-out duration-300 px-5 py-6 rounded-none rounded-bl-lg rounded-br-lg shadow-sm hover:shadow-lg z-10"
                    >
                        <IoIosArrowUp className="size-9" />
                    </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="text-white">
                        <p>Zurück nach oben</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}
