'use strict';
angular.module('leagueApp.buildCreate',[]).controller('buildCreate', ['$scope', 'itemGetService',function ($scope, itemGetService) {
    console.log(itemGetService.ItemsSrv);
    $scope.abc = itemGetService.ItemsSrv;
    console.log($scope.abc);
}]);
