angular.module('leagueApp').factory('itemSelectService',['$http','$cookies', function ($http,$cookies) {
    var selectedItemsSrv = [null,null,null,null,null,null];
    var addItemSrv = function(item, index){
      selectedItemsSrv.splice(index, 1, item);
    };
    var token = $cookies.get('token');
    var username = $cookies.get('username');
    var saveBuildSrv = function(buildName){
        $http({
            method: 'POST',
            url: 'localhost:9001/api/createbuild?token='+token,
            data: {
                name: buildName,
                username: username,
                items: selectedItemsSrv

            }
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