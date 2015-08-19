/*global unexpected*/
// THIS FILE IS AUTOGENERATED! DO NOT CHANGE IT MANUALLY.
// It is built based on the examples in the documentation folder
// when the documentation site gets build by running "make site-build".
it.skipIf = function (condition) {
    (condition ? it.skip : it).apply(it, Array.prototype.slice.call(arguments, 1));
};

describe("documentation tests", function () {
    var isBrowser = typeof weknowhow !== 'undefined';
    var isPhantom = typeof mochaPhantomJS !== 'undefined';
    var expect;
    beforeEach(function () {
        expect = unexpected.clone();
        expect.output.preferredWidth = 80;

    });

    it("assertions/any/to-resemble.md contains correct examples", function () {
        var testPromises = [];
        testPromises.push(expect.promise(function () {
            return expect('testdata/People.jpg', 'to resemble', 'testdata/People2.jpg');
        }).then(function () {
            return expect.promise(function () {
                expect.fail(function (output) {
                    output.error("expected:").nl();
                    output.code("return expect('testdata/People.jpg', 'to resemble', 'testdata/People2.jpg');").nl();
                    output.error("to throw");
                });
            });
        }).caught(function (e) {
            expect(e, "to have message",
                "expected testdata/People.jpg (image/jpeg)\n" +
                "to resemble testdata/People2.jpg (image/jpeg)\n" +
                "\n" +
                "{\n" +
                "  isSameDimensions: true,\n" +
                "  dimensionDifference: { width: 0, height: 0 },\n" +
                "  mismatchPercentage: 8.66 // expected 8.66 to be less than 1\n" +
                "}\n" +
                "\n" +
                "/tmp/image.png (image/png)"
            );
        }));

        return expect.promise.all(testPromises);
    });

    it("index.md contains correct examples", function () {
        var testPromises = [];
        testPromises.push(expect.promise(function () {
            return expect('testdata/People_small.jpg', 'to resemble', 'testdata/People2_small.jpg');
        }).then(function () {
            return expect.promise(function () {
                expect.fail(function (output) {
                    output.error("expected:").nl();
                    output.code("return expect('testdata/People_small.jpg', 'to resemble', 'testdata/People2_small.jpg');").nl();
                    output.error("to throw");
                });
            });
        }).caught(function (e) {
            expect(e, "to have message",
                "expected testdata/People_small.jpg (image/jpeg)\n" +
                "to resemble testdata/People2_small.jpg (image/jpeg)\n" +
                "\n" +
                "{\n" +
                "  isSameDimensions: true,\n" +
                "  dimensionDifference: { width: 0, height: 0 },\n" +
                "  mismatchPercentage: 10.08 // expected 10.08 to be less than 1\n" +
                "}\n" +
                "\n" +
                "/tmp/image.png (image/png)"
            );
        }));


        testPromises.push(expect.promise(function () {
            return expect('testdata/People_small.jpg', 'to resemble', 'testdata/People2_small.jpg', {
                mismatchPercentage: expect.it('to be less than', 15),
                isSameDimensions: true
            });
        }));
        return expect.promise.all(testPromises);
    });
});
