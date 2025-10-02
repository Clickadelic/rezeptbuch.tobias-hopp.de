import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { PropsWithChildren } from 'react';
import { Button } from './ui/button';
import { IoClose } from 'react-icons/io5';

export default function Modal({
    children,
    show = false,
    maxWidth = '2xl',
    closeable = true,
    onClose = () => {},
    className = '',
}: PropsWithChildren<{
    show: boolean;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
    closeable?: boolean;
    onClose: CallableFunction;
    className?: string;
}>) {
    const close = () => {
        if (closeable) {
            onClose();
        }
    };

    const maxWidthClass = {
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-md',
        lg: 'sm:max-w-lg',
        xl: 'sm:max-w-xl',
        '2xl': 'sm:max-w-2xl',
        '3xl': 'sm:max-w-3xl',
        '4xl': 'sm:max-w-4xl',
    }[maxWidth];

    return (
        <Transition show={show} leave="duration-200">
            <Dialog
                as="div"
                id="modal"
                className="fixed inset-0 z-50 flex transform items-center justify-center overflow-y-auto px-4 py-3 transition-all sm:px-0"
                onClose={close}
            >
                <TransitionChild
                    enter="ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="absolute inset-0 bg-white/30 dark:bg-gray-800/30 backdrop-blur-xs" />
                </TransitionChild>

                <TransitionChild
                    enter="ease-out duration-200"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-100"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <DialogPanel
                        className={`relative z-10 transform overflow-hidden rounded-lg shadow-lg transition-all sm:mx-auto sm:w-full ${maxWidthClass}`}
                    >
                        <Button className="absolute right-6 top-6 size-[40px] hover:bg-emerald-700 dark:hover:bg-emerald-600 z-20" variant="primary" onClick={close}>
                            <IoClose className="size-5" />
                        </Button>
                        <div className={className}>
                            {children}
                        </div>
                    </DialogPanel>
                </TransitionChild>

            </Dialog>
        </Transition>
    );
}
