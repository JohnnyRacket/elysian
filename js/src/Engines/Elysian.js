"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RenderEngine_1 = require("./RenderEngine");
var GameEngine_1 = require("./GameEngine");
var CollisionManager_1 = require("./CollisionManager");
var ClickableManager_1 = require("./ClickableManager");
var Elysian = /** @class */ (function () {
    function Elysian() {
        if (Elysian._instance) {
            throw new Error("Error: Instantiation failed: Use Elysian.getInstance() instead of new.");
        }
        Elysian._instance = this;
    }
    Elysian.getInstance = function () {
        return Elysian._instance;
    };
    Elysian.prototype.create = function (canvasId) {
        var canvas = document.getElementById(canvasId);
        var context = canvas.getContext("2d");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        var gameEngine = GameEngine_1.GameEngine.getInstance();
        var renderEngine = RenderEngine_1.RenderEngine.getInstance();
        var collisionManager = CollisionManager_1.CollisionManager.getInstance();
        var clickableManager = ClickableManager_1.ClickableManager.getInstance();
        clickableManager.canvas = canvas;
        var scale = 0;
        function resize() {
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
            var yScale = canvas.height / 480;
            var xScale = canvas.width / 320;
            scale = (xScale <= yScale) ? xScale : yScale;
            context.scale(scale, scale);
            renderEngine.scale = scale;
        }
        resize();
        window.addEventListener('resize', resize);
        renderEngine.scale = scale;
        renderEngine.setCanvas(canvas, context);
        gameEngine.addService(collisionManager);
        renderEngine.addService(clickableManager);
        renderEngine.start();
        gameEngine.start();
    };
    Elysian._instance = new Elysian();
    return Elysian;
}());
exports.Elysian = Elysian;
//# sourceMappingURL=Elysian.js.map