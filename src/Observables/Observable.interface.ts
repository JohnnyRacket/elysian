import {IObserver} from './Observer.interface'
export interface IObservable{
    register(obj: IObserver);
    unregister(obj: IObserver);
    updateObservers();
    updateObserversOfDispose();
}