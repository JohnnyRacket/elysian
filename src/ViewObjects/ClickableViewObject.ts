import { DrawingStrategy } from '../DrawingStrategies/DrawingStrategy';
import { ClickStrategy } from '../Clickables/ClickStrategy';
import { Clickable } from '../Clickables/Clickable';
import { DoubleBufferedViewObject } from '../ViewObjects/DoubleBufferedViewObject';
import { AttachableViewObject } from './AttachableViewObject';
export abstract class ClickableViewObject extends AttachableViewObject implements Clickable {


    protected _callback: Function;
    public get callback(): Function{
        return this._callback;
    }
    public set callback(callback: Function){
        this._callback = callback;
    }

    public constructor(x: number,y: number, width: number, height: number, angle: number, drawingStrategy: DrawingStrategy, callback: Function){
        super(x,y,width,height,angle,drawingStrategy);
        this.callback = callback;
    }
    click() {
        if(this.callback) this.callback();
        else throw new ReferenceError("Click callback function is undefined!");
    }
    
    getGlobalX(): number {
        return this.globalX();
    }
    getGlobalY(): number {
        return this.globalY();
    }
    getWidth(): number {
        return this.width;
    }
    getHeight(): number {
        return this.height;
    }

}