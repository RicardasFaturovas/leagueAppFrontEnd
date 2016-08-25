'use strict';
angular.module('leagueApp.buildCreate',[]).controller('buildCreate', ['$scope','items', 'itemDataTransferService','itemSelectService', function ($scope, items, itemDataTransferService,itemSelectService) {
    itemDataTransferService.itemDataSrv= items;
    $scope.saveBuild = itemSelectService.saveBuildSrv;
    $scope.buildName = '';
}]);
