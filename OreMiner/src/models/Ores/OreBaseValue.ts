import { OreBaseValue, OreType } from "./OreType";
import { RefinedOreBaseValue, RefinedOreType } from "./RefinedOreType";

export class OreBaseValueManager {
    public static GetBaseValue(oreType: OreType) {
        switch (oreType) {
            case OreType.Cobblestone:
                return OreBaseValue.Cobblestone;
            case OreType.Coal:
                return OreBaseValue.Coal;
            case OreType.Copper:
                return OreBaseValue.Copper;
            case OreType.Tin:
                return OreBaseValue.Tin;
            case OreType.Iron:
                return OreBaseValue.Iron;
            case OreType.Gold:
                return OreBaseValue.Gold;
            default:
                let _discard: never = oreType;
                _discard;
        }

        console.warn("OreBaseValueManager.GetBaseValue was not able to find a base value for ore " + oreType);
        return 0;
    }

    public static GetRefinedValue(oreType: RefinedOreType) {
        switch (oreType) {
            case RefinedOreType.Stone:
                return RefinedOreBaseValue.Stone;
            case RefinedOreType.RefinedCoal:
                return RefinedOreBaseValue.RefinedCoal;
            case RefinedOreType.CopperIngot:
                return RefinedOreBaseValue.CopperIngot;
            case RefinedOreType.TinIngot:
                return RefinedOreBaseValue.TinIngot;
            case RefinedOreType.BronzeIngot:
                return RefinedOreBaseValue.BronzeIngot;
            case RefinedOreType.IronIngot:
                return RefinedOreBaseValue.IronIngot;
            case RefinedOreType.GoldIngot:
                return RefinedOreBaseValue.GoldIngot;
            default:
                let _discard: never = oreType;
                _discard;
        }

        console.warn("OreBaseValueManager.GetRefinedValue was not able to find a base value for ore " + oreType);
        return 0;
    }
}