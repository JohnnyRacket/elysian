import { PositioningDecorator } from './PositioningDecorator';
export class HorizontalCenterPositioningDecorator extends PositioningDecorator {

    private offsetX: number = 0;
    hover() {
        //do nothing
    }
    protected preRender() {
        //do nothing
    }

    render(context: CanvasRenderingContext2D, width: number, height: number) {
        this.offsetX = width/2 - this.width/2;
        this.view.x = this.offsetX;
        this.view.render(context, width, height);
    }
    update() {
        throw new Error("Method not implemented.");
    }

    public getGlobalX(){
        return this.offsetX + this.parent.x;
        
    }

}