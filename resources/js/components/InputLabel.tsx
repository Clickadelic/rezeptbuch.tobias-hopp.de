import { LabelHTMLAttributes } from 'react';

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
    ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
    return (
        <label
            {...props}
            className={`block text-sm font-medium text-gray-800 dark:text-gray-200 mb-3` + className}
        >
            {value ? value : children}
        </label>
    );
}
