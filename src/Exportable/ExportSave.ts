import { SaveItem } from "./SaveItem";
import { GameEngine } from "../Engines/GameEngine";

export function ExportSave(objects: Object[]): SaveItem[]{
    return objects.map((object) => {
        return new SaveItem((object.constructor as any).name, JSON.stringify(object) );
    });
}
