'use strict';
angular.module('leagueApp.buildCreate',[]).controller('buildCreate', ['$scope','items', 'itemDataTransferService', function ($scope, items, itemDataTransferService) {
    itemDataTransferService.itemDataSrv= items;
}]);
