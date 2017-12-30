import { Dimensionable } from "./Dimensionable";

export abstract class Rotateable extends Dimensionable{
    protected _angle: number = 0;
    get angle(): number{
        return this._angle;
    }
    set angle(angle: number){
        this._angle = angle;
    }
}