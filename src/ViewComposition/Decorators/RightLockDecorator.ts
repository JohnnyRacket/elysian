import { ComposableViewDecorator } from './ComposableViewDecorator';
export class RightLockDecorator extends ComposableViewDecorator{

    public render(context: CanvasRenderingContext2D, width: number, height: number){
        //can set x/y here
        this.view.x = width - this.width;
        this.view.render(context, width, height);
    }
}