angular.module('leagueApp').factory('itemSelectService', function () {
    var selectedItemsSrv = [null,null,null,null,null,null];
    var addItemSrv = function(item, index){
      selectedItemsSrv.splice(index, 1, item);
    };
    return {
        selectedItemsSrv: selectedItemsSrv,
        addItemSrv: addItemSrv
    };
});