import { usePage } from '@inertiajs/react';
import { useLayoutStore } from "@/stores/use-layout-store";

import { Button } from "@/components/ui/button";
import { LuPlus } from "react-icons/lu";

import { ResponsiveDialog } from "@/components/ResponsiveDialog";

export default function CreateButtonModal () {
    const { isCreateModalOpen, openCreateModal, closeCreateModal, toggleCreateModal } = useLayoutStore();
    const { auth } = usePage().props as { auth: { user?: any } };
    const user = auth?.user;

    return (
      user && (
        <>
          <Button
            variant="primary"
            className="fixed bottom-10 right-8 rounded-full py-8 px-6 shadow-xl"
            onClick={toggleCreateModal}
          >
            <LuPlus className="size-16" />
          </Button>

          <ResponsiveDialog
            isOpen={isCreateModalOpen}
            setIsOpen={(val) => val ? openCreateModal() : closeCreateModal()}
            isEditMode={false}
            icon={<LuPlus className="size-6" />}
            title="Neues Rezept"
            description="Erstelle ein neues Rezept"
            editTitle="Rezept bearbeiten"
            editDescription="Ändere Details des Rezepts"
          >
            Some Content
          </ResponsiveDialog>
        </>
      )
    )
}
