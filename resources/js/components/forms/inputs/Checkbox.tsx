import { InputHTMLAttributes } from 'react';

/**
 * A checkbox component.
 *
 * @param {string} [className] - Additional classnames to add to the input element.
 * @param {InputHTMLAttributes<HTMLInputElement>} props - Any other props you'd like to pass to the input element.
 * @returns {JSX.Element}
 */
export default function Checkbox({
    className = '',
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-400 text-primary shadow-sm focus:ring-primary ' + className
            }
        />
    );
}
