'use strict';

angular.module('leagueApp.signup', ['ui.router']).controller('signup', ['$scope', '$http', '$state', 'alerts',
    function($scope, $http, $state, alerts){

    $scope.alertMsg = '';
    $scope.alert = false;

    $scope.submitUser = function (){
        if ($scope.signupForm.$pristine){
            $scope.alert = true;
            $scope.alertMsg = alerts.alerts.submitError;
        }else if($scope.user.password === $scope.user.repeatPassword){
            $http({
                method: 'POST',
                url: 'http://localhost:9001/api/users',
                data:{
                    username: $scope.user.username,
                    password: $scope.user.password,
                    email: $scope.user.email
                }
            }).success(function (response){
                console.log(response);
                $state.transitionTo('home');
            }).error(function (err){
                console.log(err);
                $scope.alert = true;
                $scope.alertMsg = alerts.alerts.submitError;
            })
        } else if ($scope.user.password !== $scope.user.repeatPassword){
            $scope.alert = true;
            $scope.alertMsg = alerts.alerts.differentPswSrv;
        } else {
            $scope.alert = true;
            $scope.alertMsg = alerts.alerts.submitError;
        }
    };

    $scope.hideAlert = function(){
        $scope.alert = false;
    }

}]);