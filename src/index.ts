import { GameEngine } from "./Engines/GameEngine";
import { RenderEngine } from "./Engines/RenderEngine";
import { CollisionManager } from "./Engines/CollisionManager";
import { ActiveObject } from "./ExposedObjects/ActiveObject";
import { BackgroundObject } from "./ExposedObjects/BackgroundObject";
import { TextViewObject} from "./ExposedObjects/TextViewObject";
import { Bootstrap } from "./Engines/Bootstrap";
import { ImageViewObject } from "./ExposedObjects/ImageViewObject";
import { InputMapper } from "./Engines/InputMapper";

let Elysian = {
    GameEngine: GameEngine.getInstance(),
    RenderEngine: RenderEngine.getInstance(),
    CollisionManager: CollisionManager.getInstance(),
    InputMapper: InputMapper.getInstance(),

    GameObjects: {
        ActiveObject: ActiveObject,
        BackgroundObject: BackgroundObject
    },

    ViewObjects: {
        TextViewObject: TextViewObject,
        ImageViewObject: ImageViewObject
    },

    create: Bootstrap.create

    //more to come soon
}

export = Elysian;






