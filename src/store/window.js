import { INITIAL_Z_INDEX, WINDOW_CONFIG, locations } from "#constants";
import { immer } from 'zustand/middleware/immer'
import { create } from "zustand";
import useLoctionStore from "./location";

const useWindowStore = create(immer((set) => (
    {
        windows: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,

        openWindow: (windowKey, data = null) => {
            // Determine the final window to open
            let targetKey = windowKey;

            // If it's a known location and DOES NOT have its own standalone window, redirect to Finder
            if (locations[windowKey] && !WINDOW_CONFIG[windowKey]) {
                useLoctionStore.getState().setActiveLocation(locations[windowKey]);
                targetKey = 'finder';
            }

            set((state) => {
                const win = state.windows[targetKey];
                if (!win) return;
                win.isOpen = true;
                win.zIndex = state.nextZIndex;
                win.data = data ?? win.data;
                state.nextZIndex++;
            });
        },

        closeWindow: (windowKey) => set((state) => {
            const win = state.windows[windowKey];
            if (!win) return;
            win.isOpen = false;
            win.zIndex = INITIAL_Z_INDEX;
            win.data = null;
        }),

        focusWindow: (windowKey) => set((state) => {
            const win = state.windows[windowKey];
            if (!win) return;
            win.zIndex = state.nextZIndex++;
        })
    }
)));

export default useWindowStore