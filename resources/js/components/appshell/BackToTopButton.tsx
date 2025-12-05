import { Button } from '@/components/ui/button';
import { IoIosArrowUp } from 'react-icons/io';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { TooltipArrow } from '@radix-ui/react-tooltip';

/**
 * A button that scrolls the user to the top of the page.
 */
export default function BackToTopButton() {
    return (
        <div className="relative w-full flex flex-col justify-center items-center">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="primary"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="inverted-corners animate ease-in-out duration-300 px-5 py-6 rounded-none rounded-bl-lg rounded-br-lg shadow-sm hover:shadow-lg z-10"
                            aria-label="Zurück nach oben"
                        >
                            <IoIosArrowUp className="size-9" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="text-white">
                        <p>Zurück nach oben</p>
                        <TooltipArrow className="fill-emerald-800 dark:fill-emerald-800" />
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}
