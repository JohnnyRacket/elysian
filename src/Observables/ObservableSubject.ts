import { IObserver } from './IObserver';
import { IObservable } from "./IObservable";
import { Rotateable } from "../Shared/Rotatable";

export abstract class ObservableSubject extends Rotateable implements IObservable{

    abstract register(obj: IObserver);

    abstract unregister(obj: IObserver);

    abstract updateObservers();

    abstract updateObserversOfDispose();
}