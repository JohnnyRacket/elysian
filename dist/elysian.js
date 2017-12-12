(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["elysian"] = factory();
	else
		root["elysian"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReferenceManager_1 = __webpack_require__(3);
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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReferenceManager_1 = __webpack_require__(3);
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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CollisionManager = /** @class */ (function () {
    function CollisionManager() {
        this.activeCollidables = [];
        this.passiveCollidables = [];
        if (CollisionManager._instance) {
            throw new Error("Error: Instantiation failed: Use CollisionManager.getInstance() instead of new.");
        }
        CollisionManager._instance = this;
        //this.register(this.collisionManager);
        //add collision manager to the ticks, add functions for adding and removing stuff
    }
    CollisionManager.getInstance = function () {
        return CollisionManager._instance;
    };
    //there has been some pivot on how this works, and could all be eventually superceded by IAT
    //however for now active hitboxes will be circular and passive collision will be a square collision
    //I think this provides the most adaptability while not overcomplicating code
    //square hitboxs (not rotation support), eventual plan is to implement intersecting axis
    CollisionManager.prototype.tick = function () {
        for (var i = 0; i < this.activeCollidables.length; ++i) {
            var object1 = this.activeCollidables[i];
            //active v passive collisions
            for (var j = 0; j < this.passiveCollidables.length; ++j) {
                var object2 = this.passiveCollidables[j];
                if (object1.x - object1.width / 2 <= object2.x + object2.width && object1.x + object1.width / 2 >= object2.x &&
                    object1.y - object1.height / 2 <= object2.y + object2.height && object1.y + object1.height / 2 >= object2.y) {
                    // collision
                    object1.collide(object2);
                    object2.collide(object1);
                }
            }
            //active v active collisions
            for (var j = i + 1; j < this.activeCollidables.length; ++j) {
                var object2 = this.activeCollidables[j];
                var dx = object1.x - object2.x;
                var dy = object1.y - object2.y;
                var distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < object1.width / 2 + object2.width / 2 + 1) {
                    // collision
                    object1.collide(object2);
                    object2.collide(object1);
                }
            }
        }
    };
    CollisionManager.prototype.addActiveHitbox = function (hitbox) {
        this.activeCollidables.push(hitbox);
    };
    CollisionManager.prototype.addPassiveHitbox = function (hitbox) {
        this.passiveCollidables.push(hitbox);
    };
    CollisionManager.prototype.wallCollisionCheckAtPosition = function (object, x, y) {
        for (var j = 0; j < this.passiveCollidables.length; ++j) {
            var object2 = this.passiveCollidables[j];
            if (x - object.width / 2 <= object2.x + object2.width && x + object.width / 2 >= object2.x &&
                y - object.height / 2 <= object2.y + object2.height && y + object.height / 2 >= object2.y) {
                // collision
                if (object2.subject.type == 'wall')
                    return true;
                //object.collide(object2);
                //object2.collide(object);
            }
        }
        return false;
    };
    CollisionManager.prototype.collisionCheckAtPosition = function (object, x, y) {
        //active v active collisions
        for (var i = 0; i < this.activeCollidables.length; ++i) {
            var object2 = this.activeCollidables[i];
            if (object.getHitbox() != object2) {
                var dx = x - object2.x;
                var dy = y - object2.y;
                var distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < object.width / 2 + object2.width / 2) {
                    // collision
                    return true;
                }
            }
            else {
                //console.log("omg im finding myself");
            }
        }
        return false;
    };
    CollisionManager.prototype.add = function (object) {
        throw new Error('Not implemented yet.');
    };
    CollisionManager.prototype.dumpActiveHitboxes = function () {
        this.activeCollidables = [];
    };
    CollisionManager.prototype.dumpPassiveHitboxes = function () {
        this.passiveCollidables = [];
    };
    CollisionManager.prototype.remove = function (object) {
        var gameObject = object;
        if (!gameObject.getHitbox)
            return;
        this.activeCollidables = this.activeCollidables.filter(function (element) {
            if (element != gameObject.getHitbox())
                return element;
        });
        this.passiveCollidables = this.passiveCollidables.filter(function (element) {
            if (element != gameObject.getHitbox())
                return element;
        });
    };
    CollisionManager._instance = new CollisionManager();
    return CollisionManager;
}());
exports.CollisionManager = CollisionManager;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StagedReference_1 = __webpack_require__(12);
var ReferenceManager = /** @class */ (function () {
    function ReferenceManager() {
        this.stagedReferences = [];
    }
    ReferenceManager.prototype.getReferencesForStage = function (stage) {
        var stageReferences = this.stagedReferences.filter(function (object) {
            if (object.stage == stage)
                return object;
        });
        //remove the refs
        var newStagedRefs = this.stagedReferences.filter(function (object) {
            if (object.stage != stage)
                return object;
        });
        this.stagedReferences = newStagedRefs;
        return stageReferences.map(function (object) {
            return object.object;
        });
    };
    ReferenceManager.prototype.addReferenceToStage = function (object, stage) {
        var reference = new StagedReference_1.StagedReference(object, stage); //might need to rework this to pass in a SR to start to properly link
        this.stagedReferences.push(reference);
    };
    return ReferenceManager;
}());
exports.ReferenceManager = ReferenceManager;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RenderEngine_1 = __webpack_require__(0);
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


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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
var PositionableGameObject_1 = __webpack_require__(14);
var CollidableGameObject = /** @class */ (function (_super) {
    __extends(CollidableGameObject, _super);
    function CollidableGameObject(x, y, width, height, type) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.type = type;
        return _this;
    }
    CollidableGameObject.prototype.setHitbox = function (hitbox) {
        this.hitbox = hitbox;
    };
    CollidableGameObject.prototype.getHitbox = function () {
        return this.hitbox;
    };
    CollidableGameObject.prototype.removeHitbox = function () {
        this.hitbox = null;
    };
    return CollidableGameObject;
}(PositionableGameObject_1.PositionableGameObject));
exports.CollidableGameObject = CollidableGameObject;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Dimensionable = /** @class */ (function () {
    function Dimensionable() {
    }
    Object.defineProperty(Dimensionable.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dimensionable.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dimensionable.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            this._width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dimensionable.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (height) {
            this._height = height;
        },
        enumerable: true,
        configurable: true
    });
    return Dimensionable;
}());
exports.Dimensionable = Dimensionable;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

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
var ClickableViewObject_1 = __webpack_require__(8);
var DebugViewObject = /** @class */ (function (_super) {
    __extends(DebugViewObject, _super);
    function DebugViewObject(x, y, width, height, angle, subject, strategy) {
        var _this = _super.call(this, x, y, width, height, angle, strategy, null, null) || this;
        _this._clickAction = function () { };
        _this.subject = subject;
        _this.color = "#FF1493";
        return _this;
    }
    DebugViewObject.prototype.hover = function () {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(DebugViewObject.prototype, "subject", {
        get: function () {
            return this._subject;
        },
        set: function (subject) {
            this._subject = subject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugViewObject.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
            this.preRender();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugViewObject.prototype, "clickAction", {
        get: function () {
            return this._clickAction;
        },
        set: function (func) {
            this._clickAction = func;
        },
        enumerable: true,
        configurable: true
    });
    DebugViewObject.prototype.preRender = function () {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.rect(0, 0, this.width, this.height);
        this.context.fill();
    };
    DebugViewObject.prototype.update = function () {
        this.height = this.subject.height;
        this.width = this.subject.width;
    };
    return DebugViewObject;
}(ClickableViewObject_1.ClickableViewObject));
exports.DebugViewObject = DebugViewObject;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

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
var DoubleBufferedViewObject_1 = __webpack_require__(16);
var ClickableViewObject = /** @class */ (function (_super) {
    __extends(ClickableViewObject, _super);
    function ClickableViewObject(x, y, width, height, angle, drawingStrategy, clickStrategy, callback) {
        var _this = _super.call(this, x, y, width, height, angle, drawingStrategy) || this;
        _this.clickStrategy = clickStrategy;
        _this.callback = callback;
        return _this;
    }
    Object.defineProperty(ClickableViewObject.prototype, "clickStrategy", {
        get: function () {
            return this._clickStrategy;
        },
        set: function (strategy) {
            this._clickStrategy = strategy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClickableViewObject.prototype, "callback", {
        get: function () {
            return this._callback;
        },
        set: function (callback) {
            this._callback = callback;
        },
        enumerable: true,
        configurable: true
    });
    ClickableViewObject.prototype.click = function () {
        if (this.clickStrategy)
            this.clickStrategy.execute(this);
        if (this.callback)
            this.callback();
    };
    ClickableViewObject.prototype.getGlobalX = function () {
        return this.globalX();
    };
    ClickableViewObject.prototype.getGlobalY = function () {
        return this.globalY();
    };
    ClickableViewObject.prototype.getWidth = function () {
        return this.width;
    };
    ClickableViewObject.prototype.getHeight = function () {
        return this.height;
    };
    return ClickableViewObject;
}(DoubleBufferedViewObject_1.DoubleBufferedViewObject));
exports.ClickableViewObject = ClickableViewObject;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CenterDrawingStrategy = /** @class */ (function () {
    function CenterDrawingStrategy() {
    }
    CenterDrawingStrategy.prototype.calculateGlobalPositionXEffect = function (width) {
        return width / 2 * -1;
    };
    CenterDrawingStrategy.prototype.calculateGlobalPositionYEffect = function (height) {
        return height / 2 * -1;
    };
    CenterDrawingStrategy.prototype.draw = function (context, canvas, x, y, width, height) {
        context.drawImage(canvas, x - width / 2, y - height / 2);
    };
    return CenterDrawingStrategy;
}());
exports.CenterDrawingStrategy = CenterDrawingStrategy;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Hitbox = /** @class */ (function () {
    function Hitbox(width, height, subject) {
        this._width = width;
        this._height = height;
        this._subject = subject;
    }
    Object.defineProperty(Hitbox.prototype, "subject", {
        get: function () {
            return this._subject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hitbox.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hitbox.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hitbox.prototype, "x", {
        get: function () {
            return this.subject.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hitbox.prototype, "y", {
        get: function () {
            return this.subject.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hitbox.prototype, "angle", {
        get: function () {
            return this.subject.angle;
        },
        enumerable: true,
        configurable: true
    });
    Hitbox.prototype.collide = function (hitbox) {
        this.subject.collide(hitbox.subject);
    };
    return Hitbox;
}());
exports.Hitbox = Hitbox;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var GameEngine_1 = __webpack_require__(1);
var RenderEngine_1 = __webpack_require__(0);
var CollisionManager_1 = __webpack_require__(2);
var ClickableManager_1 = __webpack_require__(4);
var ActiveObject_1 = __webpack_require__(13);
var BackgroundObject_1 = __webpack_require__(18);
var TextViewObject_1 = __webpack_require__(19);
var Bootstrap_1 = __webpack_require__(20);
var Elysian = {
    GameEngine: GameEngine_1.GameEngine.getInstance(),
    RenderEngine: RenderEngine_1.RenderEngine.getInstance(),
    CollisionManager: CollisionManager_1.CollisionManager.getInstance(),
    ClickHandler: ClickableManager_1.ClickableManager.getInstance(),
    GameObjects: {
        ActiveObject: ActiveObject_1.ActiveObject,
        BackgroundObject: BackgroundObject_1.BackgroundObject
    },
    ViewObjects: {
        TextViewObject: TextViewObject_1.TextViewObject
    },
    create: Bootstrap_1.Bootstrap.create
    //more to come soon
};
module.exports = Elysian;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StagedReference = /** @class */ (function () {
    function StagedReference(object, stage) {
        this.object = object;
        this.stage = stage;
    }
    return StagedReference;
}());
exports.StagedReference = StagedReference;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

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
var CollidableGameObject_1 = __webpack_require__(5);
var DebugViewObject_1 = __webpack_require__(7);
var CenterDrawingStrategy_1 = __webpack_require__(9);
var GameEngine_1 = __webpack_require__(1);
var RenderEngine_1 = __webpack_require__(0);
var CollisionManager_1 = __webpack_require__(2);
var Hitbox_1 = __webpack_require__(10);
var ActiveObject = /** @class */ (function (_super) {
    __extends(ActiveObject, _super);
    function ActiveObject(x, y, width, height, angle, type) {
        var _this = _super.call(this, x, y, width, height, type) || this;
        _this.collisionFunction = function () { };
        _this.updateFunction = function () { };
        _this.isMoving = false;
        _this.isColliding = false;
        _this.angle = angle;
        _this.viewObject = new DebugViewObject_1.DebugViewObject(x, y, width, height, 0, _this, new CenterDrawingStrategy_1.CenterDrawingStrategy());
        RenderEngine_1.RenderEngine.getInstance().register(_this.viewObject);
        CollisionManager_1.CollisionManager.getInstance().addActiveHitbox(new Hitbox_1.Hitbox(width, height, _this));
        GameEngine_1.GameEngine.getInstance().register(_this);
        return _this;
    }
    ActiveObject.prototype.collide = function (object) {
        this.collisionFunction();
    };
    ActiveObject.prototype.tick = function () {
        this.updateFunction();
    };
    ActiveObject.prototype.dispose = function () {
        RenderEngine_1.RenderEngine.getInstance().unregister(this.viewObject);
        CollisionManager_1.CollisionManager.getInstance().remove(this.hitbox);
        GameEngine_1.GameEngine.getInstance().unregister(this);
    };
    return ActiveObject;
}(CollidableGameObject_1.CollidableGameObject));
exports.ActiveObject = ActiveObject;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

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
var ObservableGameObject_1 = __webpack_require__(15);
var PositionableGameObject = /** @class */ (function (_super) {
    __extends(PositionableGameObject, _super);
    function PositionableGameObject(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this._angle = 0;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Object.defineProperty(PositionableGameObject.prototype, "angle", {
        get: function () {
            return this._angle;
        },
        set: function (angle) {
            this._angle = angle;
        },
        enumerable: true,
        configurable: true
    });
    PositionableGameObject.prototype.setSize = function (width, height) {
        this.width = width;
        this.height = height;
    };
    PositionableGameObject.prototype.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return PositionableGameObject;
}(ObservableGameObject_1.ObservableGameObject));
exports.PositionableGameObject = PositionableGameObject;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

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
var Dimensionable_1 = __webpack_require__(6);
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


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

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
var ComposableViewObject_1 = __webpack_require__(17);
var DoubleBufferedViewObject = /** @class */ (function (_super) {
    __extends(DoubleBufferedViewObject, _super);
    function DoubleBufferedViewObject(x, y, width, height, angle, strategy) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        _this.angle = angle;
        _this.drawingStrategy = strategy;
        _this.canvas = document.createElement('canvas');
        _this.canvas.width = width;
        _this.canvas.height = height;
        _this.context = _this.canvas.getContext('2d');
        _this.preRender();
        return _this;
    }
    Object.defineProperty(DoubleBufferedViewObject.prototype, "angle", {
        get: function () {
            return this._angle;
        },
        set: function (angle) {
            this._angle = angle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoubleBufferedViewObject.prototype, "drawingStrategy", {
        get: function () {
            return this._drawingStrategy;
        },
        set: function (strategy) {
            this._drawingStrategy = strategy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoubleBufferedViewObject.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            this._width = width;
            if (this.canvas)
                this.canvas.width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoubleBufferedViewObject.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (height) {
            this._height = height;
            if (this.canvas)
                this.canvas.height = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoubleBufferedViewObject.prototype, "canvas", {
        get: function () {
            return this._canvas;
        },
        set: function (canvas) {
            this._canvas = canvas;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.context = this.canvas.getContext('2d');
            console.log("Setting Canvas is not reccomended, you should instead access the context");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoubleBufferedViewObject.prototype, "context", {
        get: function () {
            return this._context;
        },
        set: function (context) {
            this._context = context;
        },
        enumerable: true,
        configurable: true
    });
    DoubleBufferedViewObject.prototype.render = function (context, width, height) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle);
        context.translate(-this.x, -this.y);
        this.drawingStrategy.draw(context, this.canvas, this.x, this.y, this.width, this.height);
        context.restore();
        this.postRender();
    };
    DoubleBufferedViewObject.prototype.postRender = function () {
        //do nothing
    };
    DoubleBufferedViewObject.prototype.globalX = function () {
        if (this.parent) {
            return this.x + this.parent.globalX() + this.drawingStrategy.calculateGlobalPositionXEffect(this.width);
        }
        else {
            return this.x + this.drawingStrategy.calculateGlobalPositionXEffect(this.width);
        }
    };
    DoubleBufferedViewObject.prototype.globalY = function () {
        if (this.parent) {
            return this.y + this.parent.globalY() + this.drawingStrategy.calculateGlobalPositionYEffect(this.height);
        }
        else {
            return this.y + this.drawingStrategy.calculateGlobalPositionYEffect(this.height);
        }
    };
    return DoubleBufferedViewObject;
}(ComposableViewObject_1.ComposableViewObject));
exports.DoubleBufferedViewObject = DoubleBufferedViewObject;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

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
var RenderEngine_1 = __webpack_require__(0);
var Dimensionable_1 = __webpack_require__(6);
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


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

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
var CollidableGameObject_1 = __webpack_require__(5);
var DebugViewObject_1 = __webpack_require__(7);
var CenterDrawingStrategy_1 = __webpack_require__(9);
var GameEngine_1 = __webpack_require__(1);
var RenderEngine_1 = __webpack_require__(0);
var CollisionManager_1 = __webpack_require__(2);
var Hitbox_1 = __webpack_require__(10);
var BackgroundObject = /** @class */ (function (_super) {
    __extends(BackgroundObject, _super);
    function BackgroundObject(x, y, width, height, angle, type) {
        var _this = _super.call(this, x, y, width, height, type) || this;
        _this.collisionFunction = function () { };
        _this.updateFunction = function () { };
        _this.angle = angle;
        _this.viewObject = new DebugViewObject_1.DebugViewObject(x, y, width, height, 0, _this, new CenterDrawingStrategy_1.CenterDrawingStrategy());
        RenderEngine_1.RenderEngine.getInstance().register(_this.viewObject);
        CollisionManager_1.CollisionManager.getInstance().addPassiveHitbox(new Hitbox_1.Hitbox(width, height, _this));
        GameEngine_1.GameEngine.getInstance().register(_this);
        return _this;
    }
    BackgroundObject.prototype.collide = function (object) {
        this.collisionFunction();
    };
    BackgroundObject.prototype.tick = function () {
        this.updateFunction();
    };
    BackgroundObject.prototype.dispose = function () {
        RenderEngine_1.RenderEngine.getInstance().unregister(this.viewObject);
        CollisionManager_1.CollisionManager.getInstance().remove(this.hitbox);
        GameEngine_1.GameEngine.getInstance().unregister(this);
    };
    return BackgroundObject;
}(CollidableGameObject_1.CollidableGameObject));
exports.BackgroundObject = BackgroundObject;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

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
var ClickableViewObject_1 = __webpack_require__(8);
var TextViewObject = /** @class */ (function (_super) {
    __extends(TextViewObject, _super);
    function TextViewObject(x, y, width, height, angle, text, drawingStratgegy, callback) {
        var _this = _super.call(this, x, y, width, height, angle, drawingStratgegy, null, callback) || this;
        _this.onUpdate = function () { };
        _this.text = text;
        _this.preRender();
        return _this;
    }
    Object.defineProperty(TextViewObject.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
            this.preRender();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextViewObject.prototype, "font", {
        get: function () {
            return this._font;
        },
        set: function (font) {
            this._font = font;
            this.preRender();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextViewObject.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
            this.preRender();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextViewObject.prototype, "backgroundColor", {
        get: function () {
            return this._backgroundColor;
        },
        set: function (backgroundColor) {
            this._backgroundColor = backgroundColor;
            this.preRender();
        },
        enumerable: true,
        configurable: true
    });
    TextViewObject.prototype.hover = function () {
        throw new Error("Method not implemented.");
    };
    TextViewObject.prototype.preRender = function () {
        this.context.beginPath();
        this.context.clearRect(0, 0, this.width, this.height);
        if (this.backgroundColor)
            this.context.fillStyle = this.backgroundColor;
        else
            this.backgroundColor = 'transparent';
        this.context.fillRect(0, 0, this.width, this.height);
        if (this.font)
            this.context.font = this.font;
        else
            this.context.font = "bold 32px Arial";
        if (this.color)
            this.context.fillStyle = this.color;
        else
            this.context.fillStyle = "#ffffff";
        this.context.fillText(this.text, (this.width - this.context.measureText(this.text).width) / 2, (this.height + 40) / 2);
    };
    TextViewObject.prototype.update = function () {
        this.onUpdate();
    };
    return TextViewObject;
}(ClickableViewObject_1.ClickableViewObject));
exports.TextViewObject = TextViewObject;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RenderEngine_1 = __webpack_require__(0);
var GameEngine_1 = __webpack_require__(1);
var CollisionManager_1 = __webpack_require__(2);
var ClickableManager_1 = __webpack_require__(4);
var Bootstrap = /** @class */ (function () {
    function Bootstrap() {
    }
    Bootstrap.create = function (canvasId, width, height) {
        var canvas = document.getElementById(canvasId);
        var context = canvas.getContext("2d");
        canvas.height = height;
        canvas.width = width;
        var gameEngine = GameEngine_1.GameEngine.getInstance();
        var renderEngine = RenderEngine_1.RenderEngine.getInstance();
        var collisionManager = CollisionManager_1.CollisionManager.getInstance();
        var clickableManager = ClickableManager_1.ClickableManager.getInstance();
        clickableManager.canvas = canvas;
        var scale = 1;
        function resize() {
            //  if(window.innerHeight < height ) canvas.height = window.innerHeight;
            //  else canvas.height = height;
            //  if(window.innerWidth < width) canvas.width = window.innerWidth;
            //  else canvas.width = width;
            // let yScale = canvas.height/height;
            // let xScale = canvas.width/width;
            // scale = (xScale <= yScale)? xScale : yScale;
            // context.scale(scale, scale);
            // renderEngine.scale = scale;
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
    return Bootstrap;
}());
exports.Bootstrap = Bootstrap;


/***/ })
/******/ ]);
});