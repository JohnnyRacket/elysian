import { IGameObject } from '../GameObjects/GameObject.interface';
import { Dimensionable } from '../Shared/Dimensionable';
export class RelativeArea extends Dimensionable implements IGameObject{
    dispose(): void {
        throw new Error("Method not implemented.");
    }


    protected children: IGameObject[];

    public constructor(x: number, y: number, width: number, height: number) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    tick(): void {
        this.children.forEach((obj: IGameObject, index) => obj.tick());
    }
    
    public addObject(object: IGameObject){
        this.children.push(object);
    }
}