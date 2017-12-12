"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReferenceManager_1 = require("./ReferenceManager");
/*
* This class is a Singleton
*/
var GameEngine = /** @class */ (function () {
    function GameEngine() {
        this.isRunning = false;
        this.observers = [];
        this.tickLength = 33;
        this.referenceManager = new ReferenceManager_1.ReferenceManager();
        this.services = [];
        if (GameEngine._instance) {
            throw new Error("Error: Instantiation failed: Use GameEngine.getInstance() instead of new.");
        }
        GameEngine._instance = this;
        //this.register(this.collisionManager);
        //add collision manager to the ticks, add functions for adding and removing stuff
    }
    GameEngine.getInstance = function () {
        return GameEngine._instance;
    };
    /*
    * Starts the game loop
    */
    GameEngine.prototype.start = function () {
        //start loop the calls tick on a set interval
        this.isRunning = true;
        this.run();
    };
    /*
    * stops the game loop
    */
    GameEngine.prototype.stop = function () {
        //stop looping
        this.isRunning = false;
        clearInterval(this.interval);
    };
    /*
    * runs the game loop and sets the timing
    */
    GameEngine.prototype.run = function () {
        var _this = this;
        this.interval = setInterval(function () { _this.tick(); }, this.tickLength);
    };
    /*
     * Tick represents the passing of time in the game
     * and is used to progress the game through it's sequence
     */
    GameEngine.prototype.tick = function () {
        this.observers.forEach(function (obj, index) { return obj.tick(); });
        this.services.forEach(function (obj, index) { return obj.tick(); });
        //this.controllerManager.controllers.forEach((obj: IGameObject, index) => obj.tick());
        //GameMap.getInstance().printPositions();
    };
    /*
     * Register adds game objects to the list of observers
     * to be updated throught the game as time passes
     */
    GameEngine.prototype.register = function (obj) {
        this.observers.push(obj);
    };
    /*
     * Unregister removes game objects from being updated as time
     * progresses in the game
     */
    GameEngine.prototype.unregister = function (obj) {
        obj.dispose();
        this.observers = this.observers.filter(function (observer) {
            if (observer != obj)
                return observer;
        });
        this.services.forEach(function (service) {
            service.remove(obj);
        });
    };
    GameEngine.prototype.addService = function (obj) {
        this.services.push(obj);
    };
    GameEngine.prototype.addReferenceToStage = function (object, stage) {
        this.referenceManager.addReferenceToStage(object, stage);
    };
    GameEngine.prototype.getReferencesForStage = function (stage) {
        return this.referenceManager.getReferencesForStage(stage);
    };
    GameEngine._instance = new GameEngine();
    return GameEngine;
}());
exports.GameEngine = GameEngine;
//# sourceMappingURL=GameEngine.js.map