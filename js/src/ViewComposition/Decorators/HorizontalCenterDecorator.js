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
var ComposableViewDecorator_1 = require("./ComposableViewDecorator");
var RenderEngine_1 = require("../../Engines/RenderEngine");
var HorizontalCenterDecorator = /** @class */ (function (_super) {
    __extends(HorizontalCenterDecorator, _super);
    function HorizontalCenterDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HorizontalCenterDecorator.prototype.render = function (context, width, height) {
        //can set x/y here
        this.view.x = (width / 2 - (this.width * RenderEngine_1.RenderEngine.getInstance().scale) / 2) / RenderEngine_1.RenderEngine.getInstance().scale;
        this.view.render(context, width, height);
    };
    return HorizontalCenterDecorator;
}(ComposableViewDecorator_1.ComposableViewDecorator));
exports.HorizontalCenterDecorator = HorizontalCenterDecorator;
//# sourceMappingURL=HorizontalCenterDecorator.js.map