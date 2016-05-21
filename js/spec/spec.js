var saveToLocalStorage = require('../js/tasks/task1314.js');

describe("A suite", function() {
    var data = [{name: 'name'}];
    it("contains spec with an expectation", function() {
        var result = saveToLocalStorage(data);
        expect(result).not.toEqual([]);
    });
});
