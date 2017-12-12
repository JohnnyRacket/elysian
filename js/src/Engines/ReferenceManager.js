"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StagedReference_1 = require("./StagedReference");
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
//# sourceMappingURL=ReferenceManager.js.map