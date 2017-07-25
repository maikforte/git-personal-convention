angular.module("GITPersonalConvention")

    .directive("mfSpacer", function () {
        return {
            "template": "<div class='mf-spacer'></div>"
        }
    })

    .directive("mfSpacerXs", function () {
        return {
            "template": "<div class='mf-spacer-xs'></div>"
        }
    })

    .directive("mfSpacerS", function () {
        return {
            "template": "<div class='mf-spacer-s'></div>"
        }
    })

    .directive("mfSidenav", function () {
        return {
            "templateUrl": "./views/template/sidenav.tmpl.html"
        }
    })

    .directive("mfSidenavAnchor", function () {
        return {
            "scope": {
                "link": "@"
            },
            "transclude": true,
            "restrict": "EA",
            "templateUrl": "./views/template/sidenav-anchor.tmpl.html"
        }
    })

    .directive("mfHeader", function () {
        return {
            "controller": "ToolbarController",
            "templateUrl": "./views/template/header.tmpl.html"
        }
    })

    .directive("mfProject", function () {
        return {
            "scope": {
                "image": "@",
                "repository": "@",
                "title": "@",
                "type": "@",
                "status": "@"
            },
            "transclude": true,
            "restrict": "EA",
            "templateUrl": "./views/template/project.tmpl.html"
        }
    })

    .directive("mfLeftImageAlign", function () {
        return {
            "scope": {
                "image": "@",
                "width": "@",
                "height": "@",
                "align": "@",
                "text-class": "@"
            },
            "transclude": true,
            "restrict": "EA",
            "templateUrl": "./views/template/left-image-align.tmpl.html"
        }
    })

    .directive("mfRightImageAlign", function () {
        return {
            "scope": {
                "image": "@",
                "width": "@",
                "height": "@",
                "align": "@",
                "text-class": "@"
            },
            "transclude": true,
            "restrict": "EA",
            "templateUrl": "./views/template/right-image-align.tmpl.html"
        }
    });
