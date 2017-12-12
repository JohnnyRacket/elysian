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
var BottomLockDecorator = /** @class */ (function (_super) {
    __extends(BottomLockDecorator, _super);
    function BottomLockDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BottomLockDecorator.prototype.render = function (context, width, height) {
        //can set x/y here
        this.view.y = height - this.height;
        this.view.render(context, width, height);
    };
    return BottomLockDecorator;
}(ComposableViewDecorator_1.ComposableViewDecorator));
exports.BottomLockDecorator = BottomLockDecorator;
//# sourceMappingURL=BottomLockDecorator.js.map