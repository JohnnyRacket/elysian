import {IObserver} from '../Observables/IObserver'

export interface IViewObject extends IObserver{
    /*
    * function to draw to the canvas
    */
    draw(context: CanvasRenderingContext2D, width: number, height: number);
}