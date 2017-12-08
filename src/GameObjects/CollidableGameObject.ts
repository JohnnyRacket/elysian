import { Hitbox } from '../Collisions/Hitbox';
import { HitBoxFactory } from '../Collisions/HitBoxFactory';
import { PositionableGameObject } from './PositionableGameObject';

export abstract class CollidableGameObject extends PositionableGameObject{

    protected hitbox: Hitbox;
    public type: string;

    public constructor (x: number, y: number, width: number, height: number, type: string){
        super(x,y,width,height);
        this.type = type;
    }
    
    abstract collide(object: CollidableGameObject);

    public setHitbox(hitbox: Hitbox){
        this.hitbox = hitbox;
    }
    public getHitbox(): Hitbox{
        return this.hitbox;
    }
    public removeHitbox(){
        this.hitbox = null;
    }

}