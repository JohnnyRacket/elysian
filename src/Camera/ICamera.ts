import { IViewObject } from "../ViewObjects/IViewObject";

export interface ICamera{
    draw(context: CanvasRenderingContext2D, width: number, height: number);
    addActiveObject(object: IViewObject);
    addBackgroundObject(object: IViewObject);
    removeActiveObject(object: IViewObject);
    removeBackgroundObject(object: IViewObject)
}