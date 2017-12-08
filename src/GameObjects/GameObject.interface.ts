import {IObservable} from '../Observables/Observable.interface'

export interface IGameObject{
    tick(): void;
    dispose(): void;
}
