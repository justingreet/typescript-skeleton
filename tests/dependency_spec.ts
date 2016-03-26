/// <reference path="../types/jasmine.d.ts" />
import greeter = require("../app/dependency");
describe('greeter', function() {
    it('should correctly greet.', function() {
        // Given the name of the person to greet.
        var name = "Billy boy";

        // When we get the greeting for that person.
        var greeting = greeter(name);

        // Then we find it's correct.
        expect(greeting).toEqual("Hello, Billy boy");
    });
});