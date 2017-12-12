"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReferenceManager_1 = require("./ReferenceManager");
var RenderEngine = /** @class */ (function () {
    function RenderEngine() {
        this.observers = [];
        this.services = [];
        this.isRunning = false;
        this.referenceManager = new ReferenceManager_1.ReferenceManager();
        this._scale = 1;
        if (RenderEngine._instance) {
            throw new Error("Error: Instantiation failed: Use GameEngine.getInstance() instead of new.");
        }
        RenderEngine._instance = this;
    }
    Object.defineProperty(RenderEngine.prototype, "scale", {
        get: function () {
            return this._scale;
        },
        set: function (scale) {
            this._scale = scale;
        },
        enumerable: true,
        configurable: true
    });
    RenderEngine.getInstance = function () {
        return RenderEngine._instance;
    };
    RenderEngine.prototype.setCanvas = function (canvas, context) {
        this.context = context;
        this.canvas = canvas;
    };
    /*
    * starts the render loop
    */
    RenderEngine.prototype.start = function () {
        var _this = this;
        this.isRunning = true;
        requestAnimationFrame(function () { _this.run(); });
    };
    /*
    * stops the render loop
    */
    RenderEngine.prototype.stop = function () {
        this.isRunning = false;
    };
    /*
    * controls the timing at which the tick is called,
    * for visuals we will rely on the screenrefreshrate from the browser
    */
    RenderEngine.prototype.run = function () {
        var _this = this;
        //do the timing and call tick a lot
        if (this.isRunning) {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.tick();
            requestAnimationFrame(function () { _this.run(); });
        }
    };
    /*
    * updates all of the view objects
    */
    RenderEngine.prototype.tick = function () {
        var _this = this;
        this.observers.forEach(function (obj, index) { return obj.render(_this.context, _this.canvas.width, _this.canvas.height); });
    };
    /*
    * register a view object to be updated by the game engine
    */
    RenderEngine.prototype.register = function (obj) {
        this.observers.push(obj);
    };
    /*
    * unregister a view object to be updated by the game engine
    */
    RenderEngine.prototype.unregister = function (obj) {
        this.observers = this.observers.filter(function (observer) {
            if (observer != obj)
                return observer;
        });
        this.observers.forEach(function (observer) {
            observer.remove(obj);
        });
        this.services.forEach(function (service) {
            service.remove(obj);
        });
    };
    RenderEngine.prototype.addService = function (obj) {
        this.services.push(obj);
    };
    RenderEngine.prototype.addReferenceToStage = function (object, stage) {
        this.referenceManager.addReferenceToStage(object, stage);
    };
    RenderEngine.prototype.getReferencesForStage = function (stage) {
        return this.referenceManager.getReferencesForStage(stage);
    };
    RenderEngine._instance = new RenderEngine();
    return RenderEngine;
}());
exports.RenderEngine = RenderEngine;
//# sourceMappingURL=RenderEngine.js.map