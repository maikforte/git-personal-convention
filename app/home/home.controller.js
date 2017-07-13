angular.module("HomeModule")

    .controller("HomeController", function ($scope) {

        $scope.message = "Hello world!";
        $scope.result = 1 + 2;
    });
