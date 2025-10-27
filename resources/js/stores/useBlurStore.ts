import { create } from 'zustand';

interface BlurState {
    isBlurred: boolean;
    setBlurred: (value: boolean) => void;
}

export const useBlurStore = create<BlurState>((set) => ({
    isBlurred: false,
    setBlurred: (value) => set({ isBlurred: value }),
}));
