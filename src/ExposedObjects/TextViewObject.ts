import { ClickableViewObject } from "../ViewObjects/ClickableViewObject";
import { DrawingStrategy } from "../DrawingStrategies/DrawingStrategy";
import { RenderEngine } from "../Engines/RenderEngine";

export class TextViewObject extends ClickableViewObject{

    public onUpdate: Function = () => {/*do nothing*/};

    protected _text: string;
    public get text (): string {
        return this._text;
    }
    public set text(text: string){
        this._text = text;
        this.render();
    }
    protected _font: string;
    public get font (): string {
        return this._font;
    }
    public set font(font: string){
        this._font = font;
        this.render();
    }
    protected _color: string;
    public get color(): string{
        return this._color;
    }
    public set color(color: string){
        this._color = color;
        this.render();
    }
    protected _backgroundColor: string
    public get backgroundColor(): string{
        return this._backgroundColor;
    }
    public set backgroundColor(backgroundColor: string){
        this._backgroundColor = backgroundColor;
        this.render();
    }
    public constructor(x: number,y: number, width: number, height: number, angle: number,  text: string, drawingStratgegy: DrawingStrategy, callback: Function){
        super(x,y,width,height,angle,drawingStratgegy,callback);
        this.text = text;
        this.render();
        RenderEngine.getInstance().camera.addBackgroundObject(this);
    } 

    protected render() {
        this.context.beginPath();
        this.context.clearRect(0,0,this.width,this.height); 

        if(this.backgroundColor) this.context.fillStyle = this.backgroundColor;
        else this.backgroundColor = 'transparent';
        this.context.fillRect(0,0,this.width,this.height); 

        if(this.font) this.context.font = this.font;
        else this.context.font = "bold 32px Arial";

        if(this.color) this.context.fillStyle = this.color;
        else this.context.fillStyle = "#ffffff";
        
        this.context.fillText(this.text,(this.width - this.context.measureText(this.text).width)/2, (this.height + 40)/2);
    }

    update() {
        this.onUpdate();
    }
}