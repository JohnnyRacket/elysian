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
var DebugViewObject = /** @class */ (function (_super) {
    __extends(DebugViewObject, _super);
    function DebugViewObject(x, y, width, height, angle, subject, strategy) {
        var _this = _super.call(this, x, y, width, height, angle, strategy, null, null) || this;
        _this._clickAction = function () { };
        _this.subject = subject;
        _this.color = "pink";
        return _this;
    }
    DebugViewObject.prototype.hover = function () {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(DebugViewObject.prototype, "subject", {
        get: function () {
            return this._subject;
        },
        set: function (subject) {
            this._subject = subject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugViewObject.prototype, "color", {
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
    Object.defineProperty(DebugViewObject.prototype, "clickAction", {
        get: function () {
            return this._clickAction;
        },
        set: function (func) {
            this._clickAction = func;
        },
        enumerable: true,
        configurable: true
    });
    DebugViewObject.prototype.preRender = function () {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.rect(0, 0, this.width, this.height);
        this.context.fill();
    };
    DebugViewObject.prototype.update = function () {
        this.height = this.subject.height;
        this.width = this.subject.width;
    };
    return DebugViewObject;
}(ClickableViewObject_1.ClickableViewObject));
exports.DebugViewObject = DebugViewObject;
//# sourceMappingURL=DebugViewObject.js.map