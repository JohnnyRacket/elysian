"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameEngine_1 = require("./Engines/GameEngine");
var RenderEngine_1 = require("./Engines/RenderEngine");
var CollisionManager_1 = require("./Engines/CollisionManager");
var ClickableManager_1 = require("./Engines/ClickableManager");
var ActiveObject_1 = require("./ExposedObjects/ActiveObject");
var BackgroundObject_1 = require("./ExposedObjects/BackgroundObject");
var TextViewObject_1 = require("./ExposedObjects/TextViewObject");
var Elysian_1 = require("./Engines/Elysian");
exports.default = {
    GameEngine: GameEngine_1.GameEngine.getInstance(),
    RenderEngine: RenderEngine_1.RenderEngine.getInstance(),
    CollisionManager: CollisionManager_1.CollisionManager.getInstance(),
    ClickHandler: ClickableManager_1.ClickableManager.getInstance(),
    GameObjects: {
        ActiveObject: ActiveObject_1.ActiveObject,
        BackgroundObject: BackgroundObject_1.BackgroundObject
    },
    ViewObjects: {
        TextViewObject: TextViewObject_1.TextViewObject
    },
    create: Elysian_1.Elysian.getInstance().create
    //more to come soon
};
//# sourceMappingURL=index.js.map