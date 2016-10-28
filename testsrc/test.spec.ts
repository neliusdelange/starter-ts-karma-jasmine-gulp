/// <reference path="../node_modules/@types/jasmine/index.d.ts" />

import { ModuleOne } from './moduleone';

describe("describe", function() {

    let mymodule = new ModuleOne();

    it("should test something", function() {
        expect(mymodule.doSomething()).toBeTruthy();
    });
});