import { ICamera } from "./ICamera";
import { IViewObject } from "../ViewObjects/IViewObject";
import { Camera } from "./Camera";

export class FixedCamera extends Camera{
    
    draw(context: CanvasRenderingContext2D, width: number, height: number) {
        this.activeViewObjects.forEach((obj: IViewObject, index) => obj.draw(context, width, height));
    }
    
}