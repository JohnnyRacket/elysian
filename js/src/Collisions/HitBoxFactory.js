"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hitbox_1 = require("./Hitbox");
var HitBoxFactory = /** @class */ (function () {
    function HitBoxFactory(collisionManager) {
        this.collisionManager = collisionManager;
    }
    HitBoxFactory.prototype.CreateActiveSquareHitBox = function (width, height, subject) {
        var hitbox = new Hitbox_1.Hitbox(width, height, subject);
        this.collisionManager.addActiveHitbox(hitbox);
        return hitbox;
    };
    HitBoxFactory.prototype.CreatePassiveSquareHitBox = function (width, height, subject) {
        var hitbox = new Hitbox_1.Hitbox(width, height, subject);
        console.log("added passive hitbox");
        this.collisionManager.addPassiveHitbox(hitbox);
        return hitbox;
    };
    HitBoxFactory.prototype.CreateCircleHitBox = function () {
        throw Error("not yet implemented");
    };
    return HitBoxFactory;
}());
exports.HitBoxFactory = HitBoxFactory;
//# sourceMappingURL=HitBoxFactory.js.map