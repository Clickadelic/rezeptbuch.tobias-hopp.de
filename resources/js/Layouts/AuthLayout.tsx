import AppLogo from '@/components/AppLogo';
import { PropsWithChildren } from 'react';

export default function Auth({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                <AppLogo classNames="my-8" href="/" title="Toby&apos;s Rezeptbuch" />
                {children}
            </div>
        </div>
    );
}
