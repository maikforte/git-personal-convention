angular.module("GITPersonalConvention")

    .controller("ToolbarController", function ($scope, $mdSidenav) {

        $scope.toggleSidenav = function () {
            $mdSidenav("sidenav").toggle();
        };

    })
