import { ClickableViewObject } from '../../MenuViewObjects/ClickableViewObject';
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
        protected preRender() {
            //do nothing
        }
    
        render(context: CanvasRenderingContext2D, width: number, height: number) {
            this.offsetX = width - this.width - this.padding;
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