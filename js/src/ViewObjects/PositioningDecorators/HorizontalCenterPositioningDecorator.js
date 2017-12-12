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
var HorizontalCenterPositioningDecorator = /** @class */ (function (_super) {
    __extends(HorizontalCenterPositioningDecorator, _super);
    function HorizontalCenterPositioningDecorator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.offsetX = 0;
        return _this;
    }
    HorizontalCenterPositioningDecorator.prototype.hover = function () {
        //do nothing
    };
    HorizontalCenterPositioningDecorator.prototype.preRender = function () {
        //do nothing
    };
    HorizontalCenterPositioningDecorator.prototype.render = function (context, width, height) {
        this.offsetX = width / 2 - this.width / 2;
        this.view.x = this.offsetX;
        this.view.render(context, width, height);
    };
    HorizontalCenterPositioningDecorator.prototype.update = function () {
        throw new Error("Method not implemented.");
    };
    HorizontalCenterPositioningDecorator.prototype.getGlobalX = function () {
        return this.offsetX + this.parent.x;
    };
    return HorizontalCenterPositioningDecorator;
}(PositioningDecorator_1.PositioningDecorator));
exports.HorizontalCenterPositioningDecorator = HorizontalCenterPositioningDecorator;
//# sourceMappingURL=HorizontalCenterPositioningDecorator.js.map