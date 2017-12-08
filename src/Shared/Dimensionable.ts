export abstract class Dimensionable{
    protected _x: number;
    get x(): number{
        return this._x;
    }
    set x(x: number){
        this._x = x;
    }
    protected _y: number;
    get y(): number{
        return this._y;
    }
    set y(y: number){
        this._y = y;
    }

    protected _width: number;
    get width(): number{
        return this._width;
    }
    set width(width: number){
        this._width = width;
    }
    protected _height: number;
    get height(): number{
        return this._height;
    }
    set height(height: number){
        this._height = height;
    }

}