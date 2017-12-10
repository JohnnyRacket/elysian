import { GameEngine } from "./Engines/GameEngine";
import { RenderEngine } from "./Engines/RenderEngine";
import { CollisionManager } from "./Engines/CollisionManager";
import { ClickableManager } from "./Engines/ClickableManager";
import { ActiveObject } from "./ExposedObjects/ActiveObject";
import { BackgroundObject } from "./ExposedObjects/BackgroundObject";
import { TextViewObject} from "./ExposedObjects/TextViewObject";
import { Elysian } from "./Engines/Elysian";

export default {
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

    create: Elysian.getInstance().create

    //more to come soon
}





