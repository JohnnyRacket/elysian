import { DrawingStrategy } from '../DrawingStrategies/DrawingStrategy';
import { ClickStrategy } from '../Clickables/ClickStrategy';
import { Clickable } from '../Clickables/Clickable';
import { DoubleBufferedViewObject } from '../ViewObjects/DoubleBufferedViewObject';
export abstract class ClickableViewObject extends DoubleBufferedViewObject implements Clickable {

    protected _clickStrategy: ClickStrategy;
    public get clickStrategy(): ClickStrategy{
        return this._clickStrategy;
    }
    public set clickStrategy(strategy: ClickStrategy){
        this._clickStrategy = strategy;
    }

    protected _callback: Function;
    public get callback(): Function{
        return this._callback;
    }
    public set callback(callback: Function){
        this._callback = callback;
    }

    public constructor(x: number,y: number, width: number, height: number, angle: number, drawingStrategy: DrawingStrategy, clickStrategy: ClickStrategy, callback: Function){
        super(x,y,width,height,angle,drawingStrategy);
        this.clickStrategy = clickStrategy;
        this.callback = callback;
    }
    click() {
        if(this.clickStrategy) this.clickStrategy.execute(this);
        if(this.callback) this.callback();
    }
    abstract hover();
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