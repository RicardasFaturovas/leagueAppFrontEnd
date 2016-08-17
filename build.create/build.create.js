'use strict';
angular.module('leagueApp.buildCreate',[]).controller('buildCreate', ['$scope', 'items',function ($scope, items) {
    $scope.abc = items;
    console.log($scope.abc);
}]);
