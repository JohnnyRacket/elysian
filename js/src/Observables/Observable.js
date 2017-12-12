"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable = /** @class */ (function () {
    function Observable() {
        this.observers = [];
    }
    Observable.prototype.register = function (obj) {
        this.observers.push(obj);
    };
    Observable.prototype.unregister = function (obj) {
        this.observers = this.observers.filter(function (observer) {
            if (observer != obj)
                return observer;
        });
    };
    Observable.prototype.updateObservers = function () {
        this.observers.forEach(function (obj, index) { return obj.update(); });
    };
    Observable.prototype.updateObserversOfDispose = function () {
        this.observers.forEach(function (obj, index) { return obj.observableDisposed(); });
    };
    return Observable;
}());
exports.Observable = Observable;
//# sourceMappingURL=Observable.js.map