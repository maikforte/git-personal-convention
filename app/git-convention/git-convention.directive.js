angular.module("GITConventionModule")

    .directive("leftImageAlign", function () {
        return {
            "scope": {
                "image": "@"
            },
            "transclude": true,
            "restrict": "EA",
            "templateUrl": "./views/template/left-image-align.tmpl.html"
        }
    })

    .directive("rightImageAlign", function () {
        return {
            "scope": {
                "image": "@"
            },
            "transclude": true,
            "restrict": "EA",
            "templateUrl": "./views/template/right-image-align.tmpl.html"
        }
    });
