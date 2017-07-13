angular.module("GITPersonalConvention")

    .config(function ($locationProvider) {
        $locationProvider.html5Mode(true);
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        var homeState = {
            "name": "home",
            "url": "/home",
            "templateUrl": "./views/home.html",
            "controller": "HomeController"
        };
    
        var gitConventionState = {
            "name": "gitConvention",
            "url": "/git-convention",
            "templateUrl": "./views/git-convention.html",
            "controller": "HomeController"
        };

        $urlRouterProvider.otherwise("/home");
        $stateProvider.state(homeState);
    });
