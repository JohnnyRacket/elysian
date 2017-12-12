import { GameEngine } from "./Engines/GameEngine";
import { RenderEngine } from "./Engines/RenderEngine";
import { CollisionManager } from "./Engines/CollisionManager";
import { ClickableManager } from "./Engines/ClickableManager";
import { ActiveObject } from "./ExposedObjects/ActiveObject";
import { BackgroundObject } from "./ExposedObjects/BackgroundObject";
import { TextViewObject} from "./ExposedObjects/TextViewObject";
import { Bootstrap } from "./Engines/Bootstrap";

let Elysian = {
    GameEngine: GameEngine.getInstance(),
    RenderEngine: RenderEngine.getInstance(),
    CollisionManager: CollisionManager.getInstance(),
    ClickHandler: ClickableManager.getInstance(),

    GameObjects: {
        ActiveObject: ActiveObject,
        BackgroundObject: BackgroundObject
    },

    ViewObjects: {
        TextViewObject: TextViewObject
    },

    create: Bootstrap.create

    //more to come soon
}

export = Elysian;






