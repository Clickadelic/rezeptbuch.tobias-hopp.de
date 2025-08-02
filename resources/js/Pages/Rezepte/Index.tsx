import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({
    auth
    // TODO: remove any
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // @ts-ignore
}: PageProps<{ auth: { user: any } }>) {

    return (
        <>
            <Head title="Willkommen" />
            <div className="bg-slate-100 text-black/50 dark:bg-black dark:text-white/50">
                
                <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                    <div className="flex lg:col-start-2 lg:justify-center">
                        LOGO
                    </div>
                    <nav className="-mx-3 flex flex-1 justify-end">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                <main className="mt-6">
                    <h1>Rezepte Liste</h1>
                </main>
                
            </div>
        </>
    );
}
