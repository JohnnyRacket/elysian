import { ComposableViewDecorator } from './ComposableViewDecorator';
export class RightLockDecorator extends ComposableViewDecorator{

    public draw(context: CanvasRenderingContext2D, width: number, height: number){
        //can set x/y here
        this.view.x = width - this.width;
        this.view.draw(context, width, height);
    }
}