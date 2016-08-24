'use strict';


angular.module('leagueApp').factory('itemGetService', ['$http', '$q', 'API_KEY', function ($http,$q, API_KEY) {

    return {
        getItems: function () {
            var ItemListSrv = null;
            var ItemsSrv = [];
            var deferred = $q.defer();

            function Item(name, stats, gold, image, tags) {
                this.name = name;
                this.stats = stats;
                this.gold = gold;
                this.image = image;
                this.tags = tags;
            }

            //gets item data from riot api
            $http({
                method: 'GET',
                url: 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/item?itemListData=all&api_key=' + API_KEY
            }).then(function successCallback(response) {
                
                ItemListSrv = response.data.data;
                console.log(ItemListSrv);

                // combines data form http response and image links and pushes to item array
                angular.forEach(ItemListSrv, function (key, value) {
                    var newItem = new Item(key.name, key.stats, key.gold, 'http://ddragon.leagueoflegends.com/cdn/6.16.2/img/item/' + key.id + '.png', key.tags);
                    ItemsSrv.push(newItem);
                });
                deferred.resolve(ItemsSrv);
                console.log(ItemsSrv);

            }, function errorCallback(response) {

            });
            return deferred.promise;
        }
    }
}]);