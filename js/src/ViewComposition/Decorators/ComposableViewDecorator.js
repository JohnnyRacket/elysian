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
var ComposableView_1 = require("../ComposableView");
var ComposableViewDecorator = /** @class */ (function (_super) {
    __extends(ComposableViewDecorator, _super);
    function ComposableViewDecorator(view) {
        var _this = _super.call(this, view.x, view.y, view.width, view.height) || this;
        _this.view = view;
        _this.x = view.x;
        _this.y = view.y;
        _this.width = view.width;
        _this.height = view.height;
        return _this;
        //trying to figure out the best way to create a decorator, this is the best solution I have found so far
    }
    Object.defineProperty(ComposableViewDecorator.prototype, "x", {
        get: function () {
            return this.view.x;
        },
        set: function (x) {
            if (this.view != null)
                this.view.x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComposableViewDecorator.prototype, "y", {
        get: function () {
            return this.view.y;
        },
        set: function (y) {
            if (this.view != null)
                this.view.y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComposableViewDecorator.prototype, "width", {
        get: function () {
            return this.view.width;
        },
        set: function (width) {
            if (this.view != null)
                this.view.width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComposableViewDecorator.prototype, "height", {
        get: function () {
            return this.view.height;
        },
        set: function (height) {
            if (this.view != null)
                this.view.height = height;
        },
        enumerable: true,
        configurable: true
    });
    ComposableViewDecorator.prototype.remove = function (object) {
        this.view.remove(object);
    };
    return ComposableViewDecorator;
}(ComposableView_1.ComposableView));
exports.ComposableViewDecorator = ComposableViewDecorator;
//# sourceMappingURL=ComposableViewDecorator.js.map