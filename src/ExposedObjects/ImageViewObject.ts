import { ClickableViewObject } from "../ViewObjects/ClickableViewObject";
import { DrawingStrategy } from "../DrawingStrategies/DrawingStrategy";
import { RenderEngine } from "../Engines/RenderEngine";
import { TopLeftDrawingStrategy } from "../DrawingStrategies/TopLeftDrawingStrategy";

export class ImageViewObject extends ClickableViewObject{

    protected _callback: Function;
    protected imgSource: string = "";
    public onUpdate: Function = () => {/*do nothing*/};


    public constructor(x: number,y: number,width: number,height: number,angle: number,drawingStrategy: DrawingStrategy,callback: Function,imgSource: string){
        super(x,y,width,height,angle,drawingStrategy,callback);
        if(!drawingStrategy) this.drawingStrategy = new TopLeftDrawingStrategy();
        this.imgSource = imgSource;
        this.render();
        RenderEngine.getInstance().camera.addActiveObject(this);//TODO this is dumb, needs a way to choose active vs passive
    }

    protected render() {
        if(this.imgSource){
            this.context.clearRect(0,0,this.width,this.height); 
            let img = new Image();
            img.src = this.imgSource;
            this.context.webkitImageSmoothingEnabled = false;
            this.context.mozImageSmoothingEnabled = false;
            this.context.imageSmoothingEnabled = false;
            img.onload = function() {
                this.context.drawImage(img,0,0,this.width,this.height);
            }.bind(this);
        }
    }
    update() {
        this.onUpdate();
    }
}