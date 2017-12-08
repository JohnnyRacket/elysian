import { CollisionManager } from '../Engines/CollisionManager';
import { GameEngine } from '../Engines/GameEngine';
import { CollidableGameObject } from '../GameObjects/CollidableGameObject';
import { Hitbox } from './Hitbox';

export class HitBoxFactory{

    private collisionManager: CollisionManager;
    
    public constructor(collisionManager: CollisionManager){
        this.collisionManager = collisionManager;
    }

    public CreateActiveSquareHitBox(width: number, height: number, subject: CollidableGameObject): Hitbox{
        let hitbox: Hitbox = new Hitbox(width, height, subject);
        this.collisionManager.addActiveHitbox(hitbox);
        return hitbox;    
    }

    public CreatePassiveSquareHitBox(width: number, height: number, subject: CollidableGameObject): Hitbox{
        let hitbox: Hitbox = new Hitbox(width, height, subject);
        console.log("added passive hitbox");
        this.collisionManager.addPassiveHitbox(hitbox);
        return hitbox;
    }

    public CreateCircleHitBox(){ //future things
        throw Error("not yet implemented");
    }
}