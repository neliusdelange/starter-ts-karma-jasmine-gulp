/// <reference path="../node_modules/@types/jasmine/index.d.ts" />
"use strict";
var moduleone_1 = require('./moduleone');
describe("describe", function () {
    var mymodule = new moduleone_1.ModuleOne();
    it("should test something", function () {
        expect(mymodule.doSomething()).toBeTruthy();
    });
});
