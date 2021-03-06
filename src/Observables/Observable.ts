import { IObservable } from "./IObservable";
import { IObserver } from "./IObserver";

export class Observable implements IObservable {

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