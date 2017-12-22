import {IObserver} from './IObserver'
export interface IObservable{
    register(obj: IObserver);
    unregister(obj: IObserver);
    updateObservers();
    updateObserversOfDispose();
}