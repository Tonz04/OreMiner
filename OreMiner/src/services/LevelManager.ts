import GameState from "../models/GameState";
import { Level } from "../models/Levels/Level";
import LevelOrePercentage from "../models/Levels/LevelOrePercentage";
import { OreType } from "../models/Ores/OreType";

export default class LevelManager {
    public static GetLevel(gameState: GameState): Level {
        let level = new Level();
        level.orePercentages = this.GetOreTypePercentages(gameState.level);
        level.health = this.GetLevelHealth(gameState.level);

        return level;
    }

    public static OnOreClick(gameState: GameState, level: Level, isFromUserClick: boolean) {
        this.GetMaterialsForClick(gameState, level, isFromUserClick);
        this.InflictDamage(gameState);
        this.UpdateLevel(gameState);
    }

    private static GetMaterialsForClick(gameState: GameState, level: Level, isFromUserClick: boolean) {
        for (const percentage of level.orePercentages) {
            let random = Math.random() * 100;
            if (random <= percentage.percentage) {
                let ore = gameState.ores.find(ore => ore.oreType === percentage.oreType);
                if (ore !== undefined)
                    ore.quantity += 1;
            }
        }
    }

    private static InflictDamage(gameState: GameState) {
        gameState.currentLevel.health -= 1;
    }

    private static UpdateLevel(gameState: GameState) {
        if (gameState.currentLevel.health <= 0) {
            gameState.level += 1;
            gameState.currentLevel = this.GetLevel(gameState);
        }
    }

    private static GetOreTypePercentages(level: number) {
        let percentages = [
            { oreType: OreType.Cobblestone, percentage: 0 },
            { oreType: OreType.Coal, percentage: 0 },
            { oreType: OreType.Copper, percentage: 0 },
            { oreType: OreType.Tin, percentage: 0 },
            { oreType: OreType.Iron, percentage: 0 },
            { oreType: OreType.Gold, percentage: 0 },
        ] as Array<LevelOrePercentage>;

        if (level == 1) {
            let cobblestone = percentages.find(p => p.oreType === OreType.Cobblestone);
            if (cobblestone != undefined) {
                cobblestone.percentage = 100;
            }

            let coal = percentages.find(p => p.oreType === OreType.Coal);
            if (coal != undefined) {
                coal.percentage = 10;
            }

            let copper = percentages.find(p => p.oreType === OreType.Copper);
            if (copper != undefined) {
                copper.percentage = 1;
            }
        }

        return percentages;
    }

    private static GetLevelHealth(level: number): number {
        let health = 0;

        if (level <= 140) {
            health = Math.ceil(10 * (level - 1 + Math.pow(1.55, level - 1)));
        }
        else if (level <= 500) {
            health = Math.ceil(10 * (139 + Math.pow(1.55, 139) * Math.pow(1.145, level - 140)));
        }
        else if (level <= 200000) {
            let product = 1;
            for (let index = 501; index < level; index++) {
                product *= 1.145 + 0.001 * Math.floor(((index - 1) / 500));
            }

            health = Math.ceil(10 * (139 + Math.pow(1.55, 139) * Math.pow(1.145, 360) * product));
        }
        else {
            health = Math.ceil(Math.pow(1.545, level - 200001) * 1.24 * Math.pow(10, 25409) + (level - 1) * 10);
        }

        return health;
    }
}