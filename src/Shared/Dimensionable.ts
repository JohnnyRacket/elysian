export abstract class Dimensionable{
    protected _x: number = 0;
    get x(): number{
        return this._x;
    }
    set x(x: number){
        this._x = x;
    }
    protected _y: number = 0;
    get y(): number{
        return this._y;
    }
    set y(y: number){
        this._y = y;
    }

    protected _width: number = 0;
    get width(): number{
        return this._width;
    }
    set width(width: number){
        this._width = width;
    }
    protected _height: number = 0;
    get height(): number{
        return this._height;
    }
    set height(height: number){
        this._height = height;
    }

}