'use strict';


angular.module('leagueApp').factory('itemGetService', ['$http','API_KEY',function ($http,API_KEY){
    //Initial variables and Item constructor
    var ItemListSrv = null;
    var ItemsSrv =[];

    function Item(stats, gold, image){
        this.stats = stats;
        this.gold = gold;
        this.image = image;
    }
    //gets item data from riot api
    $http({
        method: 'GET',
        url: 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/item?itemListData=all&api_key=' + API_KEY
    }).then(function successCallback(response) {
      ItemListSrv = response.data.data;
        console.log(ItemListSrv);

        // combines data form http response and image links and pushes to array
        angular.forEach(ItemListSrv, function(key,value){
            var newItem = new Item( key.stats, key.gold,'http://ddragon.leagueoflegends.com/cdn/6.16.2/img/item/'+  key.id +'.png');
            ItemsSrv.push(newItem);
        });

        console.log(ItemsSrv);

    }, function errorCallback(response) {

    });

    return {
        ItemsSrv: ItemsSrv
    }
}]);