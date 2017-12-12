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
var PositioningDecorator_1 = require("./PositioningDecorator");
var BottomLockPositioningDecorator = /** @class */ (function (_super) {
    __extends(BottomLockPositioningDecorator, _super);
    function BottomLockPositioningDecorator(view, bottomPadding) {
        var _this = _super.call(this, view) || this;
        _this.padding = 0;
        _this.offsetY = 0;
        _this.padding = bottomPadding;
        return _this;
    }
    BottomLockPositioningDecorator.prototype.hover = function () {
        //do nothing
    };
    BottomLockPositioningDecorator.prototype.preRender = function () {
        //do nothing
    };
    BottomLockPositioningDecorator.prototype.render = function (context, width, height) {
        this.offsetY = height - this.height - this.padding;
        this.view.y = this.offsetY;
        this.view.render(context, width, height);
    };
    BottomLockPositioningDecorator.prototype.update = function () {
        throw new Error("Method not implemented.");
    };
    BottomLockPositioningDecorator.prototype.getGlobalY = function () {
        return this.offsetY + this.parent.y;
    };
    return BottomLockPositioningDecorator;
}(PositioningDecorator_1.PositioningDecorator));
exports.BottomLockPositioningDecorator = BottomLockPositioningDecorator;
//# sourceMappingURL=BottomLockPositioningDecorator.js.map