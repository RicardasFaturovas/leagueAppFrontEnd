angular.module('leagueApp').factory('itemSelectService',['$http', function ($http) {
    var selectedItemsSrv = [null,null,null,null,null,null];
    var addItemSrv = function(item, index){
      selectedItemsSrv.splice(index, 1, item);
    };
    var saveBuildSrv = function(){
        $http({
            method: 'POST',
            url: 'localhost:9001/api/createbuild',
            data: selectedItemsSrv
        }).then(function successCallback(response) {
            console.log('success');
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };
    return {
        selectedItemsSrv: selectedItemsSrv,
        addItemSrv: addItemSrv,
        saveBuildSrv : saveBuildSrv
    };
}]);