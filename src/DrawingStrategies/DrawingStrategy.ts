export interface DrawingStrategy{
    draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement, x: number, y: number, width: number, height: number);
    calculateGlobalPositionXEffect(width: number): number;
    calculateGlobalPositionYEffect(height: number): number;
}