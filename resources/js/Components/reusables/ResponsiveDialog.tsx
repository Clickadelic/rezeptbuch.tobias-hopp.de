import { useMediaQuery } from '@/hooks/useMediaQuery';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerHeader, DrawerDescription, DrawerTitle } from '@/components/ui/drawer';

interface ResponsiveDialogProps {
    icon: React.ReactNode;
    title: string;
    description?: string;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

export const ResponsiveDialog = ({ icon, title, description, isOpen, setIsOpen, children }: ResponsiveDialogProps) => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    if (isDesktop) {
        return (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="flex">
                            <span className="mr-2">{icon}</span>
                            <span>{title}</span>
                        </DialogTitle>
                        {description && <DialogDescription>{description}</DialogDescription>}
                    </DialogHeader>
                    {children}
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="flex">
                        <span className="mr-2">{icon}</span>
                        <span>{title}</span>
                    </DrawerTitle>
                    {description && <DrawerDescription>{description}</DrawerDescription>}
                </DrawerHeader>
                {children}
            </DrawerContent>
        </Drawer>
    );
};
