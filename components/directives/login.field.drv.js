'use strict';

angular.module('leagueApp').directive('loginField', [function () {
    return {
        templateUrl: 'components/directives/templates/login.field.tmpl.html',
        controller: function ($scope, $state, $http, $cookies) {

            $scope.redirectSignUp = function () {
                $state.transitionTo('signup')
            };

            $scope.login = function () {
                $http({
                    method: 'POST',
                    url: 'http://localhost:9001/api/login',
                    data: {
                        username: $scope.userlogin.username,
                        password: $scope.userlogin.password
                    }
                }).success(function (response) {
                    if (response.success === false) {
                        console.log(response.message)
                    } else {
                        $scope.token = response.token;
                        $scope.username = response.username;
                        console.log('login successful');
                        console.log(response);
                        $state.transitionTo('home');
                        addCookies($scope.token, $scope.username);
                    }
                })
            };

            var addCookies = function (token, username){
            var expireDate = new Date();
            expireDate.setDate(expireDate.getDate()+1);
                if (!$cookies.get('token')){
                    $cookies.put('token', token, {
                        expires: expireDate
                    });
                }
                if(!$cookies.get('username')){
                    $cookies.put('username', username,{
                        expires: expireDate
                    });
                }
            }
        }
    }
}]);
