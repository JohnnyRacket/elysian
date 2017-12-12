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
var RenderEngine_1 = require("../Engines/RenderEngine");
var Dimensionable_1 = require("../Shared/Dimensionable");
var ComposableViewObject = /** @class */ (function (_super) {
    __extends(ComposableViewObject, _super);
    function ComposableViewObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ComposableViewObject.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (parent) {
            this._parent = parent;
        },
        enumerable: true,
        configurable: true
    });
    ComposableViewObject.prototype.globalX = function () {
        if (this.parent) {
            return this.x + this.parent.globalX();
        }
        else {
            return this.x;
        }
    };
    ComposableViewObject.prototype.globalY = function () {
        if (this.parent) {
            return this.y + this.parent.globalY();
        }
        else {
            return this.y;
        }
    };
    ComposableViewObject.prototype.observableDisposed = function () {
        RenderEngine_1.RenderEngine.getInstance().unregister(this);
    };
    ComposableViewObject.prototype.remove = function (object) {
        //do nothing
    };
    return ComposableViewObject;
}(Dimensionable_1.Dimensionable));
exports.ComposableViewObject = ComposableViewObject;
//# sourceMappingURL=ComposableViewObject.js.map