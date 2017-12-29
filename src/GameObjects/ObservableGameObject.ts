import { Dimensionable } from '../Shared/Dimensionable';
import { IObserver } from '../Observables/IObserver';
import { Observable } from '../Observables/Observable';
import { IGameObject } from './IGameObject';
import { IObservable } from '../Observables/IObservable';


export abstract class ObservableGameObject extends Dimensionable implements IGameObject, IObservable{
    abstract tick();
    public dispose(){
        this.updateObserversOfDispose();
    }

    protected observers: IObserver[] = [];
    
        register(obj: IObserver) {
            this.observers.push(obj);
        }
        unregister(obj: IObserver) {
            this.observers = this.observers.filter( observer => {
                if(observer != obj) return observer;
            });
        }
        updateObservers() {
            this.observers.forEach((obj: IObserver, index) => obj.update());
        }
        updateObserversOfDispose(){
            this.observers.forEach((obj: IObserver, index) => obj.observableDisposed());
        }


        /* overwrite these getters/setter to update the observers when they are changed*/

        protected _x: number;
        get x(): number{
            return this._x;
        }
        set x(x: number){
            if(this.x != x){//only update observers if there is an actual change!
                this._x = x;
                this.updateObservers();
            }
        }
        protected _y: number;
        get y(): number{
            return this._y;
        }
        set y(y: number){
            if(this.y != y) {//only update observers if there is an actual change!
                this._y = y;
                this.updateObservers();
            }
        }
    
        protected _width: number;
        get width(): number{
            return this._width;
        }
        set width(width: number){
            if(this.width != width){//only update observers if there is an actual change!
                this._width = width;
                this.updateObservers();
            }
        }
        protected _height: number;
        get height(): number{
            return this._height;
        }
        set height(height: number){
            if(this.height != height){//only update observers if there is an actual change!
                this._height = height;
                this.updateObservers();
            }
        }
    
}