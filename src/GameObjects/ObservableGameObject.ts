import { Dimensionable } from '../Shared/Dimensionable';
import { IObserver } from '../Observables/Observer.interface';
import { Observable } from '../Observables/Observable';
import { IGameObject } from './GameObject.interface';
import { IObservable } from '../Observables/Observable.interface';


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
    
}