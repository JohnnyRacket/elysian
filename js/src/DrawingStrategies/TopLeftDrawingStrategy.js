"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TopLeftDrawingStrategy = /** @class */ (function () {
    function TopLeftDrawingStrategy() {
    }
    TopLeftDrawingStrategy.prototype.calculateGlobalPositionXEffect = function (width) {
        return 0;
    };
    TopLeftDrawingStrategy.prototype.calculateGlobalPositionYEffect = function (height) {
        return 0;
    };
    TopLeftDrawingStrategy.prototype.draw = function (context, canvas, x, y, width, height) {
        context.drawImage(canvas, x, y);
    };
    return TopLeftDrawingStrategy;
}());
exports.TopLeftDrawingStrategy = TopLeftDrawingStrategy;
//# sourceMappingURL=TopLeftDrawingStrategy.js.map