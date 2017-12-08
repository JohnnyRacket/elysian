import { IViewObject } from '../../ViewObjects/ViewObject.interface';
import { ComposableViewObject } from '../../ViewObjects/ComposableViewObject';
import { ComposableView } from '../ComposableView';
export abstract class ComposableViewDecorator extends ComposableView {

    protected view: ComposableViewObject;

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

    public constructor(view: ComposableViewObject){
        super(view.x, view.y, view.width, view.height);
        this.view = view;
        this.x = view.x;
        this.y = view.y;
        this.width = view.width;
        this.height = view.height;
        //trying to figure out the best way to create a decorator, this is the best solution I have found so far
    }
    public remove(object: IViewObject){
        this.view.remove(object);
    }

}