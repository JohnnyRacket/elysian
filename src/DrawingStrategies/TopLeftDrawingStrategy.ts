import { DrawingStrategy } from './DrawingStrategy';

/* 
    This class draws an object from the top left, i.e. if you draw something at position 0,0 then that
    is where the top left of the image will be. 
*/

export class TopLeftDrawingStrategy implements DrawingStrategy{
    calculateGlobalPositionXEffect(width: number): number {
        return 0;
    }
    calculateGlobalPositionYEffect(height: number): number {
        return 0;
    }
    draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement, x: number, y: number, width: number, height: number) {
        context.drawImage(canvas, x, y);
    }

}