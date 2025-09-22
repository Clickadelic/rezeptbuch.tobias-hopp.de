import { forwardRef, InputHTMLAttributes, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    {
        type = 'text',
        className = '',
        isFocused = false,
        ...props
    }: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean },
    ref,
) {
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                ' bg-gray-200 dark:bg-gray-300 rounded-lg border border-gray-400 text-gray-800 dakr:text-gray-900 focus:border-primary focus:ring-primary py-2 px-3 placeholder-gray-400 dark:placeholder-gray-600 ' +
                className
            }
            ref={localRef}
        />
    );
});
