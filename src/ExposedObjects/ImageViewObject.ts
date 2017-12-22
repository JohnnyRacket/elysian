import { ClickableViewObject } from "../ViewObjects/ClickableViewObject";

export class ImageViewObject extends ClickableViewObject{

    protected render() {
        throw new Error("Method not implemented.");
    }
    update() {
        throw new Error("Method not implemented.");
    }
    protected _callback: Function;
    


}