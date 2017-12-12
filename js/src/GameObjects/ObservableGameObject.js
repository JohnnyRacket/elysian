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
var ObservableGameObject = /** @class */ (function (_super) {
    __extends(ObservableGameObject, _super);
    function ObservableGameObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.observers = [];
        return _this;
    }
    ObservableGameObject.prototype.dispose = function () {
        this.updateObserversOfDispose();
    };
    ObservableGameObject.prototype.register = function (obj) {
        this.observers.push(obj);
    };
    ObservableGameObject.prototype.unregister = function (obj) {
        this.observers = this.observers.filter(function (observer) {
            if (observer != obj)
                return observer;
        });
    };
    ObservableGameObject.prototype.updateObservers = function () {
        this.observers.forEach(function (obj, index) { return obj.update(); });
    };
    ObservableGameObject.prototype.updateObserversOfDispose = function () {
        this.observers.forEach(function (obj, index) { return obj.observableDisposed(); });
    };
    return ObservableGameObject;
}(Dimensionable_1.Dimensionable));
exports.ObservableGameObject = ObservableGameObject;
//# sourceMappingURL=ObservableGameObject.js.map