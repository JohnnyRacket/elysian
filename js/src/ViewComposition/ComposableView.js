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
var ComposableViewObject_1 = require("../ViewObjects/ComposableViewObject");
var ComposableView = /** @class */ (function (_super) {
    __extends(ComposableView, _super);
    function ComposableView(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this.children = [];
        _this._x = x;
        _this._y = y;
        _this._width = width;
        _this._height = height;
        _this.canvas = document.createElement('canvas');
        _this.canvas.width = width;
        _this.canvas.height = height;
        _this.context = _this.canvas.getContext('2d');
        return _this;
    }
    ComposableView.prototype.render = function (context, width, height) {
        var _this = this;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.children.forEach(function (obj, index) { return obj.render(_this.context, _this.canvas.width, _this.canvas.height); });
        context.drawImage(this.canvas, this.x, this.y);
    };
    ComposableView.prototype.update = function () {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    };
    ComposableView.prototype.addView = function (viewObject) {
        viewObject.parent = this;
        this.children.push(viewObject);
    };
    ComposableView.prototype.remove = function (object) {
        this.children = this.children.filter(function (element) {
            if (element != object)
                return element;
        });
        this.children.forEach(function (child) {
            child.remove(object);
        });
    };
    return ComposableView;
}(ComposableViewObject_1.ComposableViewObject));
exports.ComposableView = ComposableView;
//# sourceMappingURL=ComposableView.js.map