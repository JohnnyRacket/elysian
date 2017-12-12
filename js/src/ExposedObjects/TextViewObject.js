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
var ClickableViewObject_1 = require("../MenuViewObjects/ClickableViewObject");
var TextViewObject = /** @class */ (function (_super) {
    __extends(TextViewObject, _super);
    function TextViewObject(x, y, width, height, angle, text, drawingStratgegy, callback) {
        var _this = _super.call(this, x, y, width, height, angle, drawingStratgegy, null, callback) || this;
        _this.onUpdate = function () { };
        _this.text = text;
        _this.preRender();
        return _this;
    }
    Object.defineProperty(TextViewObject.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
            this.preRender();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextViewObject.prototype, "font", {
        get: function () {
            return this._font;
        },
        set: function (font) {
            this._font = font;
            this.preRender();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextViewObject.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
            this.preRender();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextViewObject.prototype, "backgroundColor", {
        get: function () {
            return this._backgroundColor;
        },
        set: function (backgroundColor) {
            this._backgroundColor = backgroundColor;
            this.preRender();
        },
        enumerable: true,
        configurable: true
    });
    TextViewObject.prototype.hover = function () {
        throw new Error("Method not implemented.");
    };
    TextViewObject.prototype.preRender = function () {
        this.context.beginPath();
        this.context.clearRect(0, 0, this.width, this.height);
        if (this.backgroundColor)
            this.context.fillStyle = this.backgroundColor;
        else
            this.backgroundColor = 'transparent';
        this.context.fillRect(0, 0, this.width, this.height);
        if (this.font)
            this.context.font = this.font;
        else
            this.context.font = "bold 32px Arial";
        if (this.color)
            this.context.fillStyle = this.color;
        else
            this.context.fillStyle = "#ffffff";
        this.context.fillText(this.text, (this.width - this.context.measureText(this.text).width) / 2, (this.height + 40) / 2);
    };
    TextViewObject.prototype.update = function () {
        this.onUpdate();
    };
    return TextViewObject;
}(ClickableViewObject_1.ClickableViewObject));
exports.TextViewObject = TextViewObject;
//# sourceMappingURL=TextViewObject.js.map