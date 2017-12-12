"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hitbox = /** @class */ (function () {
    function Hitbox(width, height, subject) {
        this._width = width;
        this._height = height;
        this._subject = subject;
    }
    Object.defineProperty(Hitbox.prototype, "subject", {
        get: function () {
            return this._subject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hitbox.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hitbox.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hitbox.prototype, "x", {
        get: function () {
            return this.subject.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hitbox.prototype, "y", {
        get: function () {
            return this.subject.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hitbox.prototype, "angle", {
        get: function () {
            return this.subject.angle;
        },
        enumerable: true,
        configurable: true
    });
    Hitbox.prototype.collide = function (hitbox) {
        this.subject.collide(hitbox.subject);
    };
    return Hitbox;
}());
exports.Hitbox = Hitbox;
//# sourceMappingURL=Hitbox.js.map