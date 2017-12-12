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
//# sourceMappingURL=CollisionManager.js.map