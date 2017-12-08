import { Dimensionable } from '../Shared/Dimensionable';
import { IObserver } from '../Observables/Observer.interface';
import { Observable } from '../Observables/Observable';
import { IGameObject } from './GameObject.interface';
import { IObservable } from '../Observables/Observable.interface';
import array = require('lodash/array');


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
            array.pull(this.observers, obj);
        }
        updateObservers() {
            this.observers.forEach((obj: IObserver, index) => obj.update());
        }
        updateObserversOfDispose(){
            this.observers.forEach((obj: IObserver, index) => obj.observableDisposed());
        }
    
}