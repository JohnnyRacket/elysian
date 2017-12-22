import { ClickableViewObject } from '../../ViewObjects/ClickableViewObject';
import { PositioningDecorator } from "./PositioningDecorator";

export class RightLockPositioningDecorator extends PositioningDecorator {
    
        private padding: number = 0;
        private offsetX: number = 0;

        public constructor(view: ClickableViewObject, rightPadding: number){
            super(view);
            this.padding = rightPadding;
        }
        hover() {
            //do nothing
        }
        protected render() {
            //do nothing
        }
    
        draw(context: CanvasRenderingContext2D, width: number, height: number) {
            this.offsetX = width - this.width - this.padding;
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