import { Dimensionable } from './../Shared/Dimensionable';
import { DoubleBufferedViewObject } from './DoubleBufferedViewObject';
import { DrawingStrategy } from './../DrawingStrategies/DrawingStrategy';
import { ClickableViewObject } from '../MenuViewObjects/ClickableViewObject';
export class DebugViewObject extends ClickableViewObject{
    hover() {
        throw new Error("Method not implemented.");
    }

    protected _subject: Dimensionable;
    get subject(): Dimensionable{
        return this._subject;
    }
    set subject(subject: Dimensionable){
        this._subject = subject;
    }
    protected _color: string;
    get color(): string{
        return this._color;
    }
    set color(color: string){
        this._color = color;
        this.preRender();
    }
    protected _clickAction: Function = () => {/*do nothing*/}
    get clickAction(): Function{
        return this._clickAction;
    }
    set clickAction(func: Function){
        this._clickAction = func;
    }

    public constructor(x: number, y: number, width: number, height: number, angle: number, subject: Dimensionable, strategy: DrawingStrategy){
        super(x,y,width,height,angle, strategy,null,null);
        this.subject = subject;
        this.color = "#FF1493";
    }

    protected preRender() {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.rect(0,0,this.width,this.height); 
        this.context.fill();
    }
    update() {
        this.height = this.subject.height;
        this.width = this.subject.width;
    }

}