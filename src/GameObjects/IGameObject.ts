import {IObservable} from '../Observables/IObservable'

export interface IGameObject{
    tick(): void;
    dispose(): void;
}
