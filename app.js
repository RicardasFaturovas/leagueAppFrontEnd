'use strict';

angular.module('leagueApp',[
    'ui.router',
    'leagueApp.home',
    'leagueApp.buildCreate',
    'leagueApp.buildSearch',
    'leagueApp.profileEdit',
    'leagueApp.profileSearch',
    'leagueApp.profileView',
    'leagueApp.signup',
    'ngMaterial',
    'ngMessages'
    ])
.config(['$urlRouterProvider', '$stateProvider',function($urlRouterProvider, $stateProvider){
    $stateProvider
        .state('home',{
            url: 'home',
            templateUrl: 'home/home.html',
            controller:'home'
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
            controller:'buildSearch'
        })
        .state('profile-edit',{
            url: '/profiledit',
            templateUrl: 'profile.edit/profile.edit.html',
            controller:'profileEdit'
        })
        .state('profile-search',{
            url: '/profilesearch',
            templateUrl: 'profile.search/profile.search.html',
            controller:'profileSearch'
        })
        .state('profile-view',{
            url: 'profileview',
            templateUrl: 'profile.view/profile.view.html',
            controller:'profileView'
        })
        .state('signup',{
            url: 'signup',
            templateUrl: 'signup/signup.html',
            controller:'signup'
        })

}]).constant('API_KEY','RGAPI-EAF47474-4678-405C-A6E0-0EB899731794');