import { PropsWithChildren } from 'react';
import { useEffect } from "react";
import { usePage } from "@inertiajs/react";

import Header from '@/Components/nutshell/Header';
import RecipeSearch from '@/Components/nutshell/RecipeSearch';
import Footer from '@/Components/nutshell/Footer';

import { Toaster } from 'sonner';
import { toast } from "sonner";
import Breadcrumbs from "@/Components/nutshell/Breadcrumbs";

interface FullWidthLayoutProps extends PropsWithChildren {
    title?: string;
    children: React.ReactNode;
}

/**
 * A layout component that occupies the full width of the screen.
 *
 * @prop {string} [title] - The title to display at the top of the content area.
 * @prop {React.ReactNode} children - The content to render in the main area.
 *
 * @example
 * <FullWidthLayout title="My Page">
 *     <div>My Main Content</div>
 * </FullWidthLayout>
 */

export default function FullWidthLayout({ title, children }: FullWidthLayoutProps) {
    
    const { props } = usePage();
    const { flash } = props;

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success, {
                duration: 3000,
            });
        }
        if (flash?.error) {
            toast.error(flash.error, {
                duration: 4000,
            });
        }
    }, [flash]);
    
    return (
        <div className="min-h-screen flex flex-col justify-between bg-white">
            <div>
                <Header />
                <RecipeSearch />
            </div>
            <div className="mx-auto container grow px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-705px)]">
                <main className="py-4">
                    {title && <h2 className="text-lg font-medium leading-snug">{title}</h2>}
                    {title && <hr className="my-3 border-slate-300" />}
                    {children}
                </main>
            </div>
            <Footer />
            <Toaster position="bottom-right" />
        </div>
    );
}
