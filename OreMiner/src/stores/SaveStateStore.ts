import { defineStore } from "pinia"
import GameState from "../models/GameState";

export const useSaveStateStore = defineStore('saveState', {
    state: () => ({ saveState: {} as GameState }),
    actions: {
        getSaveState(): GameState | null {
            let savedState = localStorage.getItem("saveState") ?? "";
            if (savedState.length === 0)
                return null;

            let currentSaveState = JSON.parse(savedState);
            return currentSaveState as GameState;
        },
        setSaveState(saveState: GameState) {
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

    public static setSaveState(saveState: GameState) {
        const saveStateStore = useSaveStateStore();
        return saveStateStore.setSaveState(saveState);
    }
}