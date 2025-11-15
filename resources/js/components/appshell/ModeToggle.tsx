import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Moon, Sun } from 'lucide-react';
import { BsGear } from 'react-icons/bs';

import { useTheme } from '@/components/appshell/ThemeProvider';

/**
 * A dropdown menu to toggle the theme of the application.
 *
 * It uses the `ThemeProvider` to set the theme of the application.
 *
 * The menu contains three items: Light, Dark and System.
 *
 * When the user clicks on an item, the theme of the application is set to the corresponding corresponding item.
 */
export default function ModeToggle() {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="flat"
                    size="icon"
                    className="border border-transparent sm:border-primary hover:cursor-pointer hover:border-emerald-500 hover:text-emerald-500 dark:hover:text-emerald-500 dark:hover:border-emerald-500"
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Theme umschalten</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="mt-3 sm:w-36 bg-white/30 dark:bg-gray-800/30 p-1 rounded-lg backdrop backdrop-blur border-0">
                <div className="bg-white dark:bg-gray-800 p-1 rounded-lg">
                    <DropdownMenuItem onClick={() => setTheme('light')} className="p-2 hover:cursor-pointer text-gray-800 dark:text-gray-200 hover:text-primary hover:bg-gray-100 dark:hover:text-primary dark:hover:bg-gray-900">
                        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:-rotate-90 text-primary" />{' '}
                        Hell
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('dark')} className="p-2 hover:cursor-pointer text-gray-800 dark:text-gray-200 hover:text-primary hover:bg-gray-100 dark:hover:text-primary dark:hover:bg-gray-900">
                        <Moon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:-rotate-90 text-primary" />{' '}
                        Dunkel
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('system')} className="p-2 hover:cursor-pointer text-gray-800 dark:text-gray-200 hover:text-primary hover:bg-gray-100 dark:hover:text-primary dark:hover:bg-gray-900">
                        <BsGear className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all text-primary" />{' '}
                        System
                    </DropdownMenuItem>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
