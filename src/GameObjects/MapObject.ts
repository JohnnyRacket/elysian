import { PositionableGameObject } from './PositionableGameObject';
export class MapObject{
    public object: PositionableGameObject;
    public type: string;

    public constructor(object: PositionableGameObject, type: string){
        this.object = object;
        this.type = type;
    }
}