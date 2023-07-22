import { Level } from "./Levels/Level";
import { Ore } from "./Ores/Ore";
import { RefinedOre } from "./Ores/RefinedOre";

export const GameStateProvideModule = "gameState";

export default class GameState {
    ores: Array<Ore> = new Array();
    refinedOres: Array<RefinedOre> = new Array();
    money: number = 0;
    level: number = 1;
    currentLevel: Level = new Level();
}