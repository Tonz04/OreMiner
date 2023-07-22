import GameState from "../models/GameState";
import { Ore } from "../models/Ores/Ore";
import { OreBaseValueManager } from "../models/Ores/OreBaseValue";
import { OreType } from "../models/Ores/OreType";
import { RefinedOre } from "../models/Ores/RefinedOre";
import { RefinedOreType } from "../models/Ores/RefinedOreType";
import { SaveStateStoreManager } from "../stores/SaveStateStore";

export default class GameManager {
    public static InitializeGameState(): GameState {
        let savedState = SaveStateStoreManager.getSaveState();
        if (savedState !== null && savedState !== undefined) {
            return this.ValidateAndUpdateSavedState(savedState);
        }


        let gameState = new GameState();

        const ores = Object.keys(OreType).filter((ore) => !isNaN(Number(ore))).map(Number) as Array<OreType>;
        for (const ore of ores) {
            let currentOre = new Ore();
            currentOre.oreType = ore;
            currentOre.baseValue = OreBaseValueManager.GetBaseValue(ore);
            currentOre.quantity = 0;

            gameState.ores.push(currentOre);
        }

        const refinedOres = Object.keys(RefinedOreType).filter((ore) => !isNaN(Number(ore))).map(Number) as Array<RefinedOreType>;
        for (const refinedOre of refinedOres) {
            let currentOre = new RefinedOre();
            currentOre.refinedOreType = refinedOre;
            currentOre.baseValue = OreBaseValueManager.GetRefinedValue(refinedOre);
            currentOre.quantity = 0;

            gameState.refinedOres.push(currentOre);
        }

        //SaveStateStoreManager.setSaveState(gameState);
        return gameState;
    }

    private static ValidateAndUpdateSavedState(savedState: GameState) {
        let gameState = new GameState();
        Object.assign(gameState, savedState);
        return gameState;
    }
}