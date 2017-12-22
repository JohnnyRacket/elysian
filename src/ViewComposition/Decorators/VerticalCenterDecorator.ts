import { RenderEngine } from '../../Engines/RenderEngine';
import { ComposableViewDecorator } from './ComposableViewDecorator';
export class VerticalCenterDecorator extends ComposableViewDecorator{

    public draw(context: CanvasRenderingContext2D, width: number, height: number){
        //can set x/y here
        this.view.y = (height/2 - (this.height*RenderEngine.getInstance().scale)/2) / RenderEngine.getInstance().scale;
        this.view.draw(context, width, height);
    }
}