import { DrawingStrategy } from './DrawingStrategy';
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