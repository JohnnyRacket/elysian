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
var DoubleBufferedViewObject_1 = require("../ViewObjects/DoubleBufferedViewObject");
var ClickableViewObject = /** @class */ (function (_super) {
    __extends(ClickableViewObject, _super);
    function ClickableViewObject(x, y, width, height, angle, drawingStrategy, clickStrategy, callback) {
        var _this = _super.call(this, x, y, width, height, angle, drawingStrategy) || this;
        _this.clickStrategy = clickStrategy;
        _this.callback = callback;
        return _this;
    }
    Object.defineProperty(ClickableViewObject.prototype, "clickStrategy", {
        get: function () {
            return this._clickStrategy;
        },
        set: function (strategy) {
            this._clickStrategy = strategy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClickableViewObject.prototype, "callback", {
        get: function () {
            return this._callback;
        },
        set: function (callback) {
            this._callback = callback;
        },
        enumerable: true,
        configurable: true
    });
    ClickableViewObject.prototype.click = function () {
        if (this.clickStrategy)
            this.clickStrategy.execute(this);
        if (this.callback)
            this.callback();
    };
    ClickableViewObject.prototype.getGlobalX = function () {
        return this.globalX();
    };
    ClickableViewObject.prototype.getGlobalY = function () {
        return this.globalY();
    };
    ClickableViewObject.prototype.getWidth = function () {
        return this.width;
    };
    ClickableViewObject.prototype.getHeight = function () {
        return this.height;
    };
    return ClickableViewObject;
}(DoubleBufferedViewObject_1.DoubleBufferedViewObject));
exports.ClickableViewObject = ClickableViewObject;
//# sourceMappingURL=ClickableViewObject.js.map