'use strict';
angular.module('leagueApp.buildCreate',[]).controller('buildCreate', ['$scope','items', 'itemDataTransferService', function ($scope, items, itemDataTransferService) {
    $scope.abc = items;
    itemDataTransferService.itemDataSrv= items;
    console.log($scope.abc);
}]);
