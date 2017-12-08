import { ComposableViewDecorator } from './ComposableViewDecorator';
export class BottomLockDecorator extends ComposableViewDecorator{

    public render(context: CanvasRenderingContext2D, width: number, height: number){
        //can set x/y here
        this.view.y = height - this.height;
        this.view.render(context, width, height);
    }
}