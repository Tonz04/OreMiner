import { OreType } from "./OreType";

export class Ore {
    oreType: OreType = OreType.Cobblestone;
    quantity: number = 0;
    baseValue: number = 0;

    GetTotalValue() {
        return this.quantity * this.baseValue;
    }
}