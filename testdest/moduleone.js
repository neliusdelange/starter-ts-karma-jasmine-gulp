"use strict";
var moduletwo_1 = require('./moduletwo');
var ModuleOne = (function () {
    function ModuleOne() {
    }
    ModuleOne.prototype.doSomething = function () {
        var mytwo = new moduletwo_1.ModuleTwo(12);
        return mytwo.ReturnFalse();
    };
    return ModuleOne;
}());
exports.ModuleOne = ModuleOne;
