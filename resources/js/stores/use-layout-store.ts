// resources/js/stores/useLayoutStore.ts
import { create } from 'zustand';

interface LayoutStore {
  isCreateModalOpen: boolean;
  openCreateModal: () => void;
  closeCreateModal: () => void;
  toggleCreateModal: () => void;
}

export const useLayoutStore = create<LayoutStore>((set) => ({
  isCreateModalOpen: false,
  openCreateModal: () => set({ isCreateModalOpen: true }),
  closeCreateModal: () => set({ isCreateModalOpen: false }),
  toggleCreateModal: () => set((state) => ({ isCreateModalOpen: !state.isCreateModalOpen })),
}));
