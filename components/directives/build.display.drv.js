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
            $scope.showAdvanced = function (ev) {
                var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
                $mdDialog.show({
                        controller: function ($scope, $mdDialog) {
                            $scope.hide = function () {
                                $mdDialog.hide();
                            };
                            $scope.cancel = function () {
                                $mdDialog.cancel();
                            };
                            $scope.answer = function (answer) {
                                $mdDialog.hide(answer);
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
                        fullscreen: useFullScreen,
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
