import { LabelHTMLAttributes } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { IoIosInformationCircleOutline } from "react-icons/io";
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { TooltipArrow } from '@radix-ui/react-tooltip';

/**
 * A simple label component that uses the HTML <label> element.
 *
 * @prop {string} [value] - The text value of the label.
 * @prop {string} [className] - Additional classnames to apply to the label.
 * @prop {React.ReactNode} [children] - The children of the label.
 * @prop {LabelHTMLAttributes<HTMLLabelElement>} ...props - Any additional props to pass to the HTML <label> element.
 *
 * @example
 * <InputLabel value="Username" />
 * <InputLabel><span className="text-red-500">*</span> Password</InputLabel>
 */
export default function InputLabel({
    value,
    className = '',
    children,
    description,
    ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string, description?: string }) {
    return (
        <label {...props} className={`flex gap-2 mb-1 ` + className}>
            {description && (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger><IoIosInformationCircleOutline className="size-5" /></TooltipTrigger>
                        <TooltipContent side="right">
                            <p>{description}</p>
                            <TooltipArrow className="fill-emerald-800 dark:fill-emerald-800" />
                            </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
            {value ? value : children}
        </label>
    );
}
