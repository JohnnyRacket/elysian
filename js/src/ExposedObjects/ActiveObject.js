"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CollidableGameObject_1 = require("../GameObjects/CollidableGameObject");
var DebugViewObject_1 = require("../ViewObjects/DebugViewObject");
var CenterDrawingStrategy_1 = require("../DrawingStrategies/CenterDrawingStrategy");
var GameEngine_1 = require("../Engines/GameEngine");
var RenderEngine_1 = require("../Engines/RenderEngine");
var CollisionManager_1 = require("../Engines/CollisionManager");
var Hitbox_1 = require("../Collisions/Hitbox");
var ActiveObject = /** @class */ (function (_super) {
    __extends(ActiveObject, _super);
    function ActiveObject(x, y, width, height, angle, type) {
        var _this = _super.call(this, x, y, width, height, type) || this;
        _this.collisionFunction = function () { };
        _this.updateFunction = function () { };
        _this.isMoving = false;
        _this.isColliding = false;
        _this.angle = angle;
        _this.viewObject = new DebugViewObject_1.DebugViewObject(x, y, width, height, 0, _this, new CenterDrawingStrategy_1.CenterDrawingStrategy());
        RenderEngine_1.RenderEngine.getInstance().register(_this.viewObject);
        CollisionManager_1.CollisionManager.getInstance().addActiveHitbox(new Hitbox_1.Hitbox(width, height, _this));
        GameEngine_1.GameEngine.getInstance().register(_this);
        return _this;
    }
    ActiveObject.prototype.collide = function (object) {
        this.collisionFunction();
    };
    ActiveObject.prototype.tick = function () {
        this.updateFunction();
    };
    ActiveObject.prototype.dispose = function () {
        RenderEngine_1.RenderEngine.getInstance().unregister(this.viewObject);
        CollisionManager_1.CollisionManager.getInstance().remove(this.hitbox);
        GameEngine_1.GameEngine.getInstance().unregister(this);
    };
    return ActiveObject;
}(CollidableGameObject_1.CollidableGameObject));
exports.ActiveObject = ActiveObject;
//# sourceMappingURL=ActiveObject.js.map