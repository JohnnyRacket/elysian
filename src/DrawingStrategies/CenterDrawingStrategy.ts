import { DrawingStrategy } from './DrawingStrategy';

/* 
    This class draws an object from center, i.e. if you draw something at position 0,0 then that
    is where the center of the image will be, and you would only see the bottom-right quadrant on screen.
*/

export class CenterDrawingStrategy implements DrawingStrategy{
    calculateGlobalPositionXEffect(width: number): number {
        return width/2 * -1;
    }
    calculateGlobalPositionYEffect(height: number): number {
        return height/2 * -1;
    }
    draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement, x: number, y: number, width: number, height: number) {
        context.drawImage(canvas, x - width/2, y - height/2);
    }

}