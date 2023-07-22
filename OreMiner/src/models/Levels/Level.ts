import { OreType } from "../Ores/OreType";
import LevelOrePercentage from "./LevelOrePercentage";

export class Level {
    oreImage = "images/" + OreType[0] + ".png";
    orePercentages: Array<LevelOrePercentage> = new Array();
    health: number = 0;
}