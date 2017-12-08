import {IObserver} from '../Observables/Observer.interface'

export interface IViewObject extends IObserver{
    /*
    * function to draw to the canvas
    */
    render(context: CanvasRenderingContext2D, width: number, height: number);
    remove(object: IViewObject);
}