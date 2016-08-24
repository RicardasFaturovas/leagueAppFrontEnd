'use strict';

angular.module('leagueApp').directive('buildDisplayDirective', function () {

    return {

        templateUrl: 'components/directives/templates/build.display.tmpl.html',
        scope:{
          index: '@index'
        },
        controller: function ($scope, $mdDialog, $mdMedia, itemDataTransferService, itemSelectService, $attrs) {
            $scope.status = '  ';
            $scope.index =  $attrs.index;
            $scope.items = itemDataTransferService.itemDataSrv;

            $scope.selectItem = function(item){
                itemSelectService.addItemSrv(item,$scope.index);
                $mdDialog.hide();
            };
            //Updates images in item selection screen
            $scope.$watch(function(){
                return itemSelectService.selectedItemsSrv[$scope.index]
            },function(){
                if(itemSelectService.selectedItemsSrv[$scope.index] != null)
                $scope.itemImage =  itemSelectService.selectedItemsSrv[$scope.index].image ;
            });

            $scope.showAdvanced = function (ev) {
                var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
                $mdDialog.show({
                        controller: function ($scope, $mdDialog) {

                            $scope.filterOptions = {
                                stores: [
                                    {id : 1, name : 'Health', tags: 'Health' },
                                    {id : 2, name : 'Mana', tags: 'Mana' },
                                    {id : 3, name : 'Health Regen', tags: 'HealthRegen' },
                                    {id : 4, name : 'Mana Regen', tags: 'ManaRegen' },
                                    {id : 5, name : 'Armor', tags: 'Armor' },
                                    {id : 6, name : 'Magic Resist', tags: 'SpellBlock' },
                                    {id : 7, name : 'Movement Speed', tags: 'NonbootsMovement' },
                                    {id : 8, name : 'GoldPer', tags: 'GoldPer' },
                                    {id : 9, name : 'Vision', tags: 'Vision' },
                                    {id : 10, name : 'Active', tags: 'Active' },
                                    {id : 11, name : 'Boots', tags: 'Boots' },
                                    {id : 12, name : 'Tenacity', tags: 'Tenacity' },
                                    {id : 13, name : 'Trinket', tags: 'Trinket' },
                                    {id : 14, name : 'Attack dmg', tags: 'Damage' },
                                    {id : 15, name : 'Trinket', tags: 'Trinket' },
                                    {id : 16, name : 'Trinket', tags: 'Trinket' }
                                ]
                            };


                            $scope.hide = function () {
                                $mdDialog.hide();
                            };
                            $scope.cancel = function () {
                                $mdDialog.cancel();
                            };
                            $scope.items = itemDataTransferService.itemDataSrv;
                            $scope.index =  $attrs.index;
                            $scope.selectItem = function(item){
                                itemSelectService.addItemSrv(item, $scope.index);
                                console.log(itemSelectService.selectedItemsSrv );
                                $mdDialog.hide();
                            };
                        },
                        templateUrl: 'components/dialogs/templates/build.display.dialog.tmpl.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: true,
                        locals: {
                            items: $scope.items,
                            selectItem: $scope.selectItem,
                            index: $scope.index
                        }
                    })
                    .then(function (answer) {
                        $scope.status = 'You said the information was "' + answer + '".';
                    }, function () {
                        $scope.status = 'You cancelled the dialog.';
                    });

                $scope.$watch(function () {
                    return $mdMedia('xs') || $mdMedia('sm');
                }, function (wantsFullScreen) {
                    $scope.customFullscreen = (wantsFullScreen === true);
                });
            };
        }
    }
});
