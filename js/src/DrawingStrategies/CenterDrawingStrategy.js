"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CenterDrawingStrategy = /** @class */ (function () {
    function CenterDrawingStrategy() {
    }
    CenterDrawingStrategy.prototype.calculateGlobalPositionXEffect = function (width) {
        return width / 2 * -1;
    };
    CenterDrawingStrategy.prototype.calculateGlobalPositionYEffect = function (height) {
        return height / 2 * -1;
    };
    CenterDrawingStrategy.prototype.draw = function (context, canvas, x, y, width, height) {
        context.drawImage(canvas, x - width / 2, y - height / 2);
    };
    return CenterDrawingStrategy;
}());
exports.CenterDrawingStrategy = CenterDrawingStrategy;
//# sourceMappingURL=CenterDrawingStrategy.js.map