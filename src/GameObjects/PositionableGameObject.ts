import { Dimensionable } from '../Shared/Dimensionable';
import {IGameObject} from './GameObject.interface'
import { ObservableGameObject } from './ObservableGameObject';
import { IObserver } from "../Observables/Observer.interface";

export abstract class PositionableGameObject extends ObservableGameObject{

    
    protected _angle: number = 0;
    get angle(): number{
        return this._angle;
    }
    set angle(angle: number){
        this._angle = angle;
    }

    public constructor(x: number, y: number, width: number, height: number){
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    public setSize(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    public setPosition(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    abstract tick();

}