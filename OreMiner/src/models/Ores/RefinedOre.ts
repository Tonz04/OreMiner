import { OreType } from "./OreType";
import { RefinedOreType } from "./RefinedOreType";

export class RefinedOre {
    refinedOreType: RefinedOreType = RefinedOreType.Stone;
    quantity: number = 0;
    baseValue: number = 0;

    GetTotalValue() {
        return this.quantity * this.baseValue;
    }
}

export class Recipe {
    ingredients: Array<Ingredient> = new Array();
}

export class Ingredient {
    oreType: OreType = OreType.Cobblestone;
    quantity: number = 0;
}