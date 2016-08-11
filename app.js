'use strict';
angular.module('leagueApp',["ui.router"])
.config(['$urlRouterProvider', '$stateProvider',function($urlRouterProvider, $stateProvider){
    $stateProvider
        .state('home',{
            url: 'home',
            templateUrl: 'home/home.html',
            controller:'home/home.js'
        })
        .state('build.create',{
            url: 'buildcreation',
            templateUrl: 'build.create/build.create.html',
            controller:'build.create/build.create.js'
        })
        .state('build.search',{
            url: '/buildsearch',
            templateUrl: 'build.search/build.search.html',
            controller:'build.search/build.search.js'
        })
        .state('profile.edit',{
            url: '/profiledit',
            templateUrl: 'profile.edit/profile.edit.html',
            controller:'profile.edit/profile.edit.js'
        })
        .state('profile.search',{
            url: '/profilesearch',
            templateUrl: 'profile.search/profile.search.html',
            controller:'profile.search/profile.search.js'
        })
        .state('profile.view',{
            url: 'profileview',
            templateUrl: 'profile.view/profile.view.html',
            controller:'profile.view/profile.view.js'
        })
        .state('signup',{
            url: 'signup',
            templateUrl: 'signup/signup.html',
            controller:'signup/signup.js'
        })

}]);