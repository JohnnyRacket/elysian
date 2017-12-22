import { ClickableViewObject } from '../../ViewObjects/ClickableViewObject';
import { PositioningDecorator } from "./PositioningDecorator";

export class BottomLockPositioningDecorator extends PositioningDecorator {
    
        private padding: number = 0;
        private offsetY: number = 0;

        public constructor(view: ClickableViewObject, bottomPadding: number){
            super(view);
            this.padding = bottomPadding;
        }
        hover() {
            //do nothing
        }
        protected render() {
            //do nothing
        }
    
        draw(context: CanvasRenderingContext2D, width: number, height: number) {
            this.offsetY = height - this.height - this.padding;
            this.view.y = this.offsetY;
            this.view.draw(context, width, height);
        }
        update() {
            throw new Error("Method not implemented.");
        }
    
        public getGlobalY(){
            return this.offsetY + this.parent.y;
            
        }
    
    }