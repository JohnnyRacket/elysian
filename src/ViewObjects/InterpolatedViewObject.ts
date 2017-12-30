import { DoubleBufferedViewObject } from "./DoubleBufferedViewObject";
import { DrawingStrategy } from "../DrawingStrategies/DrawingStrategy";

export abstract class InterpolatedViewObject extends DoubleBufferedViewObject{

    protected laggingX: number = 0;
    protected laggingY: number = 0;
    protected laggingWidth: number = 0;
    protected laggingHeight: number = 0;
    protected laggingAngle: number = 0;

    public interpolationSpeed: number = 5;

    public constructor(x: number, y: number, width: number, height: number, angle: number, drawingStrategy: DrawingStrategy){
        super(x,y,width,height,angle,drawingStrategy);
        this.laggingX = x;
        this.laggingY = y;
        this.laggingWidth = width;
        this.laggingHeight = height;
        this.laggingAngle = angle;
    }

    protected abstract render();

    public draw(context: CanvasRenderingContext2D, width: number, height: number){
        this.interpolate();// slowly catch the visuals up over time so it doesnt chunk around

        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.laggingAngle); 
        context.translate(-this.x,-this.y);
        this.drawingStrategy.draw(context, this.canvas, this.laggingX, this.laggingY, this.laggingWidth, this.laggingHeight);
        context.restore();
    }

    protected interpolate(){
        this.laggingX += ((this.x - this.laggingX ) / this.interpolationSpeed);
        this.laggingY += ((this.y - this.laggingY) / this.interpolationSpeed);
        this.laggingWidth += ((this.width - this.laggingWidth) / this.interpolationSpeed);
        this.laggingHeight += ((this.height - this.laggingHeight) / this.interpolationSpeed);
        this.laggingAngle += ((this.angle - this.laggingAngle) / this.interpolationSpeed);
    }

    
}