import { Button } from "@/components/ui/button";
import { IoIosArrowUp } from "react-icons/io";


export default function BackToTopButton() {
    return (
        <div className="relative w-full flex justify-center items-center">
            <Button title="Zurück nach oben" variant="primary" className="animate ease-in-out duration-300 relative top-[44px] p-4 py-5 rounded-none rounded-bl rounded-br shadow-sm hover:shadow-lg z-10" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <IoIosArrowUp className="size-8" />
            </Button>
        </div>
    );
}