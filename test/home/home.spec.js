describe("Hello World Module", function () {
    beforeEach(module("HomeModule"));

    var HelloWorldController,
        scope;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        HelloWorldController = $controller('HomeController', {
            $scope: scope
        });
    }));

    it('says hello world!', function () {
        expect(scope.message).toEqual("Hello world!");
    });
});
