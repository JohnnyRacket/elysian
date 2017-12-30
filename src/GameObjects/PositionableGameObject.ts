import { Dimensionable } from '../Shared/Dimensionable';
import {IGameObject} from './IGameObject'
import { ObservableGameObject } from './ObservableGameObject';
import { IObserver } from "../Observables/IObserver";

export abstract class PositionableGameObject extends ObservableGameObject{

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