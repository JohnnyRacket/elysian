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
var PositionableGameObject_1 = require("./PositionableGameObject");
var CollidableGameObject = /** @class */ (function (_super) {
    __extends(CollidableGameObject, _super);
    function CollidableGameObject(x, y, width, height, type) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.type = type;
        return _this;
    }
    CollidableGameObject.prototype.setHitbox = function (hitbox) {
        this.hitbox = hitbox;
    };
    CollidableGameObject.prototype.getHitbox = function () {
        return this.hitbox;
    };
    CollidableGameObject.prototype.removeHitbox = function () {
        this.hitbox = null;
    };
    return CollidableGameObject;
}(PositionableGameObject_1.PositionableGameObject));
exports.CollidableGameObject = CollidableGameObject;
//# sourceMappingURL=CollidableGameObject.js.map