angular.module("GITPersonalConvention")

    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme("default")
            .primaryPalette("light-blue")
            .accentPalette("green")
            .warnPalette("red");
    });
