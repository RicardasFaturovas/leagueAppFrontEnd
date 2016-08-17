'use strict';

angular.module('leagueApp',['leagueApp.buildCreate','ngMaterial','ui.router'])
.config(['$urlRouterProvider', '$stateProvider',function($urlRouterProvider, $stateProvider){
    $stateProvider
        .state('home',{
            url: 'home',
            templateUrl: 'home/home.html',
            controller:'home/home.js'
        })
        .state('build-create',{
            url: 'buildcreation',
            templateUrl: 'build.create/build.create.html',
            controller:'buildCreate',
            resolve: {
                items : function(itemGetService){
                    return itemGetService.getItems();
                }
            }

        })
        .state('build-search',{
            url: '/buildsearch',
            templateUrl: 'build.search/build.search.html',
            controller:'build.search/build.search.js'
        })
        .state('profile-edit',{
            url: '/profiledit',
            templateUrl: 'profile.edit/profile.edit.html',
            controller:'profile.edit/profile.edit.js'
        })
        .state('profile-search',{
            url: '/profilesearch',
            templateUrl: 'profile.search/profile.search.html',
            controller:'profile.search/profile.search.js'
        })
        .state('profile-view',{
            url: 'profileview',
            templateUrl: 'profile.view/profile.view.html',
            controller:'profile.view/profile.view.js'
        })
        .state('signup',{
            url: 'signup',
            templateUrl: 'signup/signup.html',
            controller:'signup/signup.js'
        })

}]).constant('API_KEY','RGAPI-EAF47474-4678-405C-A6E0-0EB899731794');