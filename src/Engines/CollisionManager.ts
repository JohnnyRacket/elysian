import { Hitbox } from '../Collisions/Hitbox';
import { CollidableGameObject } from '../GameObjects/CollidableGameObject';
import { IGameObject } from '../GameObjects/GameObject.interface';
import { IModelService } from "./IModelService";

export class CollisionManager implements IModelService{


    private activeCollidables: Hitbox[] = [];
    private passiveCollidables: Hitbox[] = [];

    private static _instance: CollisionManager = new CollisionManager();
    
      private constructor() {
          if(CollisionManager._instance){
              throw new Error("Error: Instantiation failed: Use CollisionManager.getInstance() instead of new.");
          }
          CollisionManager._instance = this;
          //this.register(this.collisionManager);
          //add collision manager to the ticks, add functions for adding and removing stuff
      }
   
      public static getInstance(): CollisionManager
      {
          return CollisionManager._instance;
      }

    //there has been some pivot on how this works, and could all be eventually superceded by IAT
    //however for now active hitboxes will be circular and passive collision will be a square collision
    //I think this provides the most adaptability while not overcomplicating code

    //square hitboxs (not rotation support), eventual plan is to implement intersecting axis


    tick(): void {
        for(let i = 0; i < this.activeCollidables.length; ++i){
            let object1: Hitbox = this.activeCollidables[i];
            //active v passive collisions
            for(let j = 0; j < this.passiveCollidables.length; ++j){
                let object2: Hitbox = this.passiveCollidables[j];
                if (object1.x - object1.width/2 <= object2.x + object2.width  && object1.x + object1.width/2  >= object2.x &&
                    object1.y - object1.height/2 <= object2.y + object2.height && object1.y + object1.height/2 >= object2.y){
                    // collision
                    object1.collide(object2);
                    object2.collide(object1);
                }
            }
            //active v active collisions
            for(let j = i + 1; j < this.activeCollidables.length; ++j){
                let object2: Hitbox = this.activeCollidables[j];
                var dx = object1.x - object2.x;
                var dy = object1.y - object2.y;
                var distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < object1.width/2 + object2.width/2 + 1) {
                    // collision
                    object1.collide(object2);
                    object2.collide(object1);
                }
            }
        }
    }

    public addActiveHitbox(hitbox: Hitbox){
        this.activeCollidables.push(hitbox);
    }

    public addPassiveHitbox(hitbox: Hitbox){
        this.passiveCollidables.push(hitbox);
    }

    public wallCollisionCheckAtPosition(object: CollidableGameObject, x: number, y: number): boolean{
        for(let j = 0; j < this.passiveCollidables.length; ++j){
            let object2: Hitbox = this.passiveCollidables[j];
            if (x - object.width/2 <= object2.x + object2.width   && x + object.width/2   >= object2.x &&
                y - object.height/2 <= object2.y + object2.height  && y + object.height/2  >= object2.y){
                // collision

                if(object2.subject.type == 'wall') return true;
                //object.collide(object2);
                //object2.collide(object);
            }
        }
        return false;
    }

    public collisionCheckAtPosition(object: CollidableGameObject, x: number, y: number): boolean{
        //active v active collisions
        for(let i = 0; i < this.activeCollidables.length; ++i){
            let object2: Hitbox = this.activeCollidables[i];
            if(object.getHitbox() != object2){
                var dx = x - object2.x;
                var dy = y - object2.y;
                var distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < object.width/2 + object2.width/2) {
                    // collision
                    return true;
                }
            }else{
                //console.log("omg im finding myself");
            }
            
        }
        return false;
    }

    public add(object: Object) {
        throw new Error('Not implemented yet.');
    }

    public dumpActiveHitboxes(){
        this.activeCollidables = [];
    }

    public dumpPassiveHitboxes(){
        this.passiveCollidables = [];
    }

    public remove(object: Object) {
        let gameObject = object as CollidableGameObject;
        if(!gameObject.getHitbox) return;
        this.activeCollidables = this.activeCollidables.filter(element => {
            if(element != gameObject.getHitbox()) return element;
        });
        this.passiveCollidables = this.passiveCollidables.filter(element => {
            if(element != gameObject.getHitbox()) return element;
        });
    }
}