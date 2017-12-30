import { DoubleBufferedViewObject } from "./DoubleBufferedViewObject";

export abstract class InterpolatedViewObject extends DoubleBufferedViewObject{

    protected eventualX: number = 0;
    protected eventualY: number = 0;
    protected eventualWidth: number = 0;
    protected eventualHeight: number = 0;
    protected eventualAngle: number = 0;

    protected abstract render();

    
}