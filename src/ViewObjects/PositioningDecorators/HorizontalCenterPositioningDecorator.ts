import { PositioningDecorator } from './PositioningDecorator';
export class HorizontalCenterPositioningDecorator extends PositioningDecorator {

    private offsetX: number = 0;
    hover() {
        //do nothing
    }
    protected render() {
        //do nothing
    }

    draw(context: CanvasRenderingContext2D, width: number, height: number) {
        this.offsetX = width/2 - this.width/2;
        this.view.x = this.offsetX;
        this.view.draw(context, width, height);
    }
    update() {
        throw new Error("Method not implemented.");
    }

    public getGlobalX(){
        return this.offsetX + this.parent.x;
        
    }

}