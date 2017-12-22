import { ComposableViewDecorator } from './ComposableViewDecorator';
import { RenderEngine } from '../../Engines/RenderEngine';
export class HorizontalCenterDecorator extends ComposableViewDecorator{

    public draw(context: CanvasRenderingContext2D, width: number, height: number){
        //can set x/y here
        this.view.x = (width/2 - (this.width*RenderEngine.getInstance().scale)/2) / RenderEngine.getInstance().scale;
        this.view.draw(context, width, height);
    }
}