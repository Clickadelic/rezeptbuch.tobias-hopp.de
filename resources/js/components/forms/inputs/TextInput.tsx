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
                'bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:border-primary focus:ring-primary py-[5px] px-3 placeholder:text-gray-600 dark:placeholder:text-gray-600 ' +
                className
            }
            ref={localRef}
        />
    );
});
