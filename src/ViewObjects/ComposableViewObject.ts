import { RenderEngine } from '../Engines/RenderEngine';
import { IViewObject } from './ViewObject.interface';
import { Dimensionable } from "../Shared/Dimensionable";
export abstract class ComposableViewObject extends Dimensionable implements IViewObject {

    protected _parent: ComposableViewObject;
    public get parent(): ComposableViewObject{
        return this._parent
    }
    public set parent(parent: ComposableViewObject){
        this._parent = parent;
    }

    abstract render(context: CanvasRenderingContext2D, width: number, height: number);
    abstract update();

    public globalX(): number{
        if(this.parent){
            return this.x + this.parent.globalX();
        }else{
            return this.x;
        } 
    }

    public globalY(): number{
        if(this.parent){
            return this.y + this.parent.globalY();
        }else{
            return this.y;
        }
    }

    observableDisposed() {
        RenderEngine.getInstance().unregister(this);
    }

    public remove(object: IViewObject) {
        //do nothing
    }

}