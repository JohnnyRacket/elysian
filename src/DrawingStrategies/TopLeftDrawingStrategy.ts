import { DrawingStrategy } from './DrawingStrategy';
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