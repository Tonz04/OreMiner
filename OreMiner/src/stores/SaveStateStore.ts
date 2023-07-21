import { defineStore } from "pinia"

export const useSaveStateStore = defineStore('saveState', {
    state: () => ({ saveState: {} as SaveState }),
    actions: {
        getSaveState() {
            let currentSaveState = JSON.parse(localStorage.getItem("saveState") ?? "");
            return currentSaveState;
        },
        setSaveState(saveState: SaveState) {
            this.$patch({
                saveState: saveState,
            });
            localStorage.setItem("saveState", JSON.stringify(this.saveState))
        },
    },
});

export class SaveStateStoreManager {
    public static getSaveState() {
        const saveStateStore = useSaveStateStore();
        return saveStateStore.getSaveState();
    }

    public static setSaveState(saveState: SaveState) {
        const saveStateStore = useSaveStateStore();
        return saveStateStore.setSaveState(saveState);
    }
}

export type SaveState = Object;