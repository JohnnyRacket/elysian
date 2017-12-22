import { CollidableGameObject } from "../GameObjects/CollidableGameObject";
import { ClickableViewObject } from "../ViewObjects/ClickableViewObject";
import { DebugViewObject } from "../ViewObjects/DebugViewObject";
import { CenterDrawingStrategy } from "../DrawingStrategies/CenterDrawingStrategy";
import { GameEngine } from "../Engines/GameEngine";
import { RenderEngine } from "../Engines/RenderEngine";
import { CollisionManager } from "../Engines/CollisionManager";
import { Hitbox } from "../Collisions/Hitbox";

export class BackgroundObject extends CollidableGameObject{

    public collision: Function = (object: CollidableGameObject) => {/*do nothing*/};
    public run: Function = () => {/*do nothing*/};
    public viewObject: ClickableViewObject;

    constructor(x: number, y: number, width: number, height: number, angle: number, type: string){
        super(x,y,width,height,type);
        this.angle = angle;
        this.viewObject = new DebugViewObject(x,y,width,height,0,this,new CenterDrawingStrategy());
        RenderEngine.getInstance().register(this.viewObject);
        CollisionManager.getInstance().addPassiveHitbox(new Hitbox(width, height, this));
        GameEngine.getInstance().register(this);
    }

    collide(object: CollidableGameObject) {
        this.collision(object);
    }

    tick() {
        this.run();
    }
    
    dispose(){//remove all object references to free up for GC
        RenderEngine.getInstance().unregister(this.viewObject);
        CollisionManager.getInstance().remove(this.hitbox);
        GameEngine.getInstance().unregister(this);
    }
    
}