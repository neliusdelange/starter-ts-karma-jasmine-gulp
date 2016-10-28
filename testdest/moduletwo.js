"use strict";
var ModuleTwo = (function () {
    /**
     *
     */
    function ModuleTwo(a) {
        this.a = a;
    }
    ModuleTwo.prototype.ReturnFalse = function () {
        return true;
    };
    ModuleTwo.prototype.RetunTrue = function () {
        return true;
    };
    return ModuleTwo;
}());
exports.ModuleTwo = ModuleTwo;
