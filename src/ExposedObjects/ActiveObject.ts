import { CollidableGameObject } from "../GameObjects/CollidableGameObject";
import { ClickableViewObject } from "../ViewObjects/ClickableViewObject";
import { DebugViewObject } from "../ViewObjects/DebugViewObject";
import { CenterDrawingStrategy } from "../DrawingStrategies/CenterDrawingStrategy";
import { GameEngine } from "../Engines/GameEngine";
import { RenderEngine } from "../Engines/RenderEngine";
import { CollisionManager } from "../Engines/CollisionManager";
import { Hitbox } from "../Collisions/Hitbox";

export class ActiveObject extends CollidableGameObject{

    public collision: Function = (object: CollidableGameObject) => {/*do nothing*/};
    public run: Function = () => {/*do nothing*/};
    protected _input: Function;
    public set input(func: Function){
        console.log("setting the inputs");
        this._input = func;
        this._input();
    }
    public get input(): Function{
        return this._input;
    }
    public viewObject: ClickableViewObject;

    constructor(x: number, y: number, width: number, height: number, angle: number, type: string){
        super(x,y,width,height,type);
        if(!type) this.type = 'generic'; //assign type of generic if type is left null;
        this.angle = angle;
        this.viewObject = new DebugViewObject(x,y,width,height,0,this,new CenterDrawingStrategy());
        this.observers.push(this.viewObject);
        RenderEngine.getInstance().camera.addActiveObject(this.viewObject);
        CollisionManager.getInstance().addActiveHitbox(new Hitbox(width, height, this));
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