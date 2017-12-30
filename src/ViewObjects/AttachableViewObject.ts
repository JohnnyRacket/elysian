import { DoubleBufferedViewObject } from "./DoubleBufferedViewObject";
import { Rotateable } from "../Shared/Rotatable";
import { IObservable } from "../Observables/IObservable";
import { PositionableGameObject } from "../GameObjects/PositionableGameObject";
import { ObservableSubject } from "../Observables/ObservableSubject";
import { InterpolatedViewObject } from "./InterpolatedViewObject";

export abstract class AttachableViewObject extends InterpolatedViewObject{

    protected _subject: IObservable;
    get subject(): IObservable{
        return this._subject;
    }
    set subject(subject: IObservable){
        this._subject = subject;
        this.subject.register(this);
    }

    protected abstract render();

    update() {
        this.x = (this.subject as ObservableSubject).x;
        this.y = (this.subject as ObservableSubject).y;
        this.width = (this.subject as ObservableSubject).width;
        this.height = (this.subject as ObservableSubject).height;
        this.angle = (this.subject as ObservableSubject).angle;
    }
    
}