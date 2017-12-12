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
var Dimensionable_1 = require("../Shared/Dimensionable");
var RelativeArea = /** @class */ (function (_super) {
    __extends(RelativeArea, _super);
    function RelativeArea(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    RelativeArea.prototype.dispose = function () {
        throw new Error("Method not implemented.");
    };
    RelativeArea.prototype.tick = function () {
        this.children.forEach(function (obj, index) { return obj.tick(); });
    };
    RelativeArea.prototype.addObject = function (object) {
        this.children.push(object);
    };
    return RelativeArea;
}(Dimensionable_1.Dimensionable));
exports.RelativeArea = RelativeArea;
//# sourceMappingURL=RelativeArea.js.map