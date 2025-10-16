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
                    className="border border-transparent sm:border-primary hover:cursor-pointer hover:border-emerald-400 hover:text-emerald-400 dark:hover:text-emerald-400 dark:hover:border-emerald-400"
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:-rotate-90" />{' '}
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    <Moon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:-rotate-90" />{' '}
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                    <BsGear className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />{' '}
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
