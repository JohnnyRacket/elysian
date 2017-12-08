import array = require('lodash/array');
import { IObservable } from "./Observable.interface";
import { IObserver } from "./Observer.interface";

export class Observable implements IObservable {

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