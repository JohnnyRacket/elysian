"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RenderEngine_1 = require("./RenderEngine");
var ClickableManager = /** @class */ (function () {
    function ClickableManager() {
        this.clickables = [];
        if (ClickableManager._instance) {
            throw new Error("Error: Instantiation failed: Use ClickableManager.getInstance() instead of new.");
        }
        ClickableManager._instance = this;
        //this.register(this.collisionManager);
        //add collision manager to the ticks, add functions for adding and removing stuff
    }
    Object.defineProperty(ClickableManager.prototype, "canvas", {
        set: function (canvas) {
            var _this = this;
            this._canvas = canvas;
            this._canvas.addEventListener('click', function (evt) {
                _this.clickEvents(evt);
            }, false);
        },
        enumerable: true,
        configurable: true
    });
    ClickableManager.getInstance = function () {
        return ClickableManager._instance;
    };
    Object.defineProperty(ClickableManager.prototype, "scale", {
        get: function () {
            return RenderEngine_1.RenderEngine.getInstance().scale;
        },
        enumerable: true,
        configurable: true
    });
    ClickableManager.prototype.add = function (object) {
        try {
            this.clickables.push(object);
        }
        catch (err) {
            console.log("You can only add objects of type Clickable to the ClickableManager");
        }
    };
    ClickableManager.prototype.remove = function (object) {
        var clickable = object;
        this.clickables = this.clickables.filter(function (element) {
            if (element != clickable)
                return element;
        });
    };
    ClickableManager.prototype.clickEvents = function (event) {
        //console.log(event.x, event.y)
        var x = event.x / this.scale;
        var y = event.y / this.scale;
        if (this.clickInterceptor)
            this.clickInterceptor.handle(event);
        else {
            this.clickables.forEach(function (obj, index) {
                if (x >= obj.getGlobalX() && x <= (obj.getGlobalX() + obj.getWidth()) &&
                    y >= obj.getGlobalY() && y <= (obj.getGlobalY() + obj.getHeight())) {
                    console.log("click match found ", obj);
                    obj.click();
                }
                ;
                ///obj.click()
            });
        }
    };
    ClickableManager.prototype.addClickable = function (clickable) {
        this.clickables.push(clickable);
    };
    ClickableManager._instance = new ClickableManager();
    return ClickableManager;
}());
exports.ClickableManager = ClickableManager;
//# sourceMappingURL=ClickableManager.js.map