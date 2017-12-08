import { ComposableViewDecorator } from './ComposableViewDecorator';
import { RenderEngine } from '../../Engines/RenderEngine';
export class HorizontalCenterDecorator extends ComposableViewDecorator{

    public render(context: CanvasRenderingContext2D, width: number, height: number){
        //can set x/y here
        this.view.x = (width/2 - (this.width*RenderEngine.getInstance().scale)/2) / RenderEngine.getInstance().scale;
        this.view.render(context, width, height);
    }
}