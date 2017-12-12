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
var ComposableViewObject_1 = require("./ComposableViewObject");
var DoubleBufferedViewObject = /** @class */ (function (_super) {
    __extends(DoubleBufferedViewObject, _super);
    function DoubleBufferedViewObject(x, y, width, height, angle, strategy) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        _this.angle = angle;
        _this.drawingStrategy = strategy;
        _this.canvas = document.createElement('canvas');
        _this.canvas.width = width;
        _this.canvas.height = height;
        _this.context = _this.canvas.getContext('2d');
        _this.preRender();
        return _this;
    }
    Object.defineProperty(DoubleBufferedViewObject.prototype, "angle", {
        get: function () {
            return this._angle;
        },
        set: function (angle) {
            this._angle = angle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoubleBufferedViewObject.prototype, "drawingStrategy", {
        get: function () {
            return this._drawingStrategy;
        },
        set: function (strategy) {
            this._drawingStrategy = strategy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoubleBufferedViewObject.prototype, "canvas", {
        get: function () {
            return this._canvas;
        },
        set: function (canvas) {
            this._canvas = canvas;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.context = this.canvas.getContext('2d');
            this.preRender();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoubleBufferedViewObject.prototype, "context", {
        get: function () {
            return this._context;
        },
        set: function (context) {
            this._context = context;
        },
        enumerable: true,
        configurable: true
    });
    DoubleBufferedViewObject.prototype.render = function (context, width, height) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle);
        context.translate(-this.x, -this.y);
        this.drawingStrategy.draw(context, this.canvas, this.x, this.y, this.width, this.height);
        context.restore();
        this.postRender();
    };
    DoubleBufferedViewObject.prototype.postRender = function () {
        //do nothing
    };
    DoubleBufferedViewObject.prototype.globalX = function () {
        if (this.parent) {
            return this.x + this.parent.globalX() + this.drawingStrategy.calculateGlobalPositionXEffect(this.width);
        }
        else {
            return this.x + this.drawingStrategy.calculateGlobalPositionXEffect(this.width);
        }
    };
    DoubleBufferedViewObject.prototype.globalY = function () {
        if (this.parent) {
            return this.y + this.parent.globalY() + this.drawingStrategy.calculateGlobalPositionYEffect(this.height);
        }
        else {
            return this.y + this.drawingStrategy.calculateGlobalPositionYEffect(this.height);
        }
    };
    return DoubleBufferedViewObject;
}(ComposableViewObject_1.ComposableViewObject));
exports.DoubleBufferedViewObject = DoubleBufferedViewObject;
//# sourceMappingURL=DoubleBufferedViewObject.js.map