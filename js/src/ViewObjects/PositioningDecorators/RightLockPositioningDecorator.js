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
var RightLockPositioningDecorator = /** @class */ (function (_super) {
    __extends(RightLockPositioningDecorator, _super);
    function RightLockPositioningDecorator(view, rightPadding) {
        var _this = _super.call(this, view) || this;
        _this.padding = 0;
        _this.offsetX = 0;
        _this.padding = rightPadding;
        return _this;
    }
    RightLockPositioningDecorator.prototype.hover = function () {
        //do nothing
    };
    RightLockPositioningDecorator.prototype.preRender = function () {
        //do nothing
    };
    RightLockPositioningDecorator.prototype.render = function (context, width, height) {
        this.offsetX = width - this.width - this.padding;
        this.view.x = this.offsetX;
        this.view.render(context, width, height);
    };
    RightLockPositioningDecorator.prototype.update = function () {
        throw new Error("Method not implemented.");
    };
    RightLockPositioningDecorator.prototype.getGlobalX = function () {
        return this.offsetX + this.parent.x;
    };
    return RightLockPositioningDecorator;
}(PositioningDecorator_1.PositioningDecorator));
exports.RightLockPositioningDecorator = RightLockPositioningDecorator;
//# sourceMappingURL=RightLockPositioningDecorator.js.map