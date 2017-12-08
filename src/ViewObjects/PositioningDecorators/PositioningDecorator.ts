import { ClickableViewObject } from '../../MenuViewObjects/ClickableViewObject';
import { Clickable } from '../../Clickables/Clickable';
import { ComposableViewObject } from '../../ViewObjects/ComposableViewObject';
export abstract class PositioningDecorator extends ClickableViewObject {

    protected view: ClickableViewObject;

    get x(): number{
        return this.view.x;
    }
    set x(x: number){
        if (this.view != null) this.view.x = x;
    }
    get y(): number{
        return this.view.y;
    }
    set y(y: number){
        if (this.view != null) this.view.y = y;
    }
    get width(): number{
        return this.view.width;
    }
    set width(width: number){
        if (this.view != null) this.view.width = width;
    }
    get height(): number{
        return this.view.height;
    }
    set height(height: number){
        if (this.view != null) this.view.height = height;
    }

    public constructor(view: ClickableViewObject){
        super(view.x,view.y,view.width,view.y,view.angle,view.drawingStrategy,view.clickStrategy, view.callback);
        this.view = view;
        this.x = view.x;
        this.y = view.y;
        this.width = view.width;
        this.height = view.height;
        //trying to figure out the best way to create a decorator, this is the best solution I have found so far
    }

    public click(){
        this.view.click();//.execute(this); //.click();
    }

}