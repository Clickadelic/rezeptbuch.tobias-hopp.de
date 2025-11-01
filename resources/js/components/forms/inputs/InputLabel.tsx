import { LabelHTMLAttributes } from 'react';

import { IoIosInformationCircleOutline } from 'react-icons/io';

import { Popover, PopoverContent, PopoverTrigger,
} from "@/components/ui/popover"

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
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string; description?: string }) {
    return (
        <span {...props} className={`flex gap-2 mb-1 ` + className}>
            {description && (
                <Popover>
                    <PopoverTrigger><IoIosInformationCircleOutline className="size-5 text-gray-400 dark:text-gray-400" /></PopoverTrigger>
                    <PopoverContent side="right">
                        {description}
                        
                    </PopoverContent>
                </Popover>
            )}
            {value ? value : children}
        </span>
    );
}
