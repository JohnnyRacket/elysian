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
var RightLockDecorator = /** @class */ (function (_super) {
    __extends(RightLockDecorator, _super);
    function RightLockDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RightLockDecorator.prototype.render = function (context, width, height) {
        //can set x/y here
        this.view.x = width - this.width;
        this.view.render(context, width, height);
    };
    return RightLockDecorator;
}(ComposableViewDecorator_1.ComposableViewDecorator));
exports.RightLockDecorator = RightLockDecorator;
//# sourceMappingURL=RightLockDecorator.js.map