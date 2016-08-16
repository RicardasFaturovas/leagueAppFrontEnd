'use strict';

angular.module('leagueApp').directive('loginField',[function(){
    return{
        templateUrl: 'components/directives/templates/login.field.tmpl.html',
        controller: function($scope,$state){

            $scope.redirectSignUp = function(){
                $state.transitionTo('signup')
            }

        }
    }
}]);
