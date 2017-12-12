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
var ObservableGameObject_1 = require("./ObservableGameObject");
var PositionableGameObject = /** @class */ (function (_super) {
    __extends(PositionableGameObject, _super);
    function PositionableGameObject(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this._angle = 0;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Object.defineProperty(PositionableGameObject.prototype, "angle", {
        get: function () {
            return this._angle;
        },
        set: function (angle) {
            this._angle = angle;
        },
        enumerable: true,
        configurable: true
    });
    PositionableGameObject.prototype.setSize = function (width, height) {
        this.width = width;
        this.height = height;
    };
    PositionableGameObject.prototype.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return PositionableGameObject;
}(ObservableGameObject_1.ObservableGameObject));
exports.PositionableGameObject = PositionableGameObject;
//# sourceMappingURL=PositionableGameObject.js.map