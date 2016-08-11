angular.module('leagueApp',["ui.router"])
.config(['$urlRouterProvider', '$StateProvider',function($urlRouterProvider, $stateProvider){
    $stateProvider
        .state('home',{
            url: 'home',
            template: 'home/home.html',
            controller:'home/home.js'
        })
        .state('build.create',{
            url: '#!/buildcreation',
            template: 'build.create.html',
            controller:'build.create/build.create.js'
        })
        .state('build.search',{
            url: '/buildsearch',
            template: 'build.search/build.search.html',
            controller:'build.search/build.search.js'
        })
        .state('profile.edit',{
            url: '/profiledit',
            template: 'profile.edit/profile.edit.html',
            controller:'profile.edit/profile.edit.js'
        })
        .state('profile.search',{
            url: '/profilesearch',
            template: 'profile.search/profile.search.html',
            controller:'profile.search/profile.search.js'
        })
        .state('profile.view',{
            url: 'profileview',
            template: 'profile.view/profile.view.html',
            controller:'profile.view/profile.view.js'
        })
        .state('signup',{
            url: 'signup',
            template: 'signup/signup.html',
            controller:'signup/signup.js'
        })

}]);