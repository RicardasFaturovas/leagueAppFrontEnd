'use strict';

angular.module('leagueApp').directive('buildStatusDirective', function () {
    return {
        templateUrl: 'components/directives/templates/build.status.tmpl.html',
        controller: function ($scope, itemSelectService) {
            $scope.items = itemSelectService.selectedItemsSrv;
            $scope.calculateStats = function (stat, percentStat, name) {

                $scope.$watchCollection(function () {
                        return itemSelectService.selectedItemsSrv
                    }, function () {

                        $scope.stat = 0;
                        var evalName = '$scope.' + name + '=' + '0';
                        eval(evalName);
                        for (var i = 0; i < itemSelectService.selectedItemsSrv.length; i++) {
                            if (itemSelectService.selectedItemsSrv[i] != null && itemSelectService.selectedItemsSrv[i].stats.hasOwnProperty(stat) === true) {
                                $scope.stat += itemSelectService.selectedItemsSrv[i].stats[stat];
                            }
                            if (itemSelectService.selectedItemsSrv[i] != null && itemSelectService.selectedItemsSrv[i].stats.hasOwnProperty(percentStat) === true) {
                                $scope.stat = $scope.stat * (1 + itemSelectService.selectedItemsSrv[i].stats[percentStat]);
                                console.log($scope.stat);
                            }
                            var evalStat = '$scope.' + name + '=' + $scope.stat;
                            eval(evalStat);


                        }
                    }
                );
            };
            $scope.health = $scope.calculateStats('FlatHPPoolMod', 'PercentHPPoolMod', 'totalHealth');
            $scope.health = $scope.calculateStats('FlatMPPoolMod', 'PercentMPPoolMod', 'totalMana');
            $scope.health = $scope.calculateStats('FlatHPRegenMod', 'PercentMPPoolMod', 'totalHPRegen');
            $scope.health = $scope.calculateStats('FlatMPRegenMod', 'PercentMPRegenMod', 'totalManaRegen');
            $scope.health = $scope.calculateStats('FlatArmorMod', 'PercentArmorMod', 'totalArmor');
            $scope.health = $scope.calculateStats('FlatSpellBlockMod', 'PercentSpellBlockMod', 'MagicResist');
            $scope.health = $scope.calculateStats('FlatMovementSpeedMod', 'PercentMovementSpeedMod', 'totalMS');
            $scope.health = $scope.calculateStats('FlatPhysicalDamageMod', 'PercentMPRegenMod', 'totalAD');
            $scope.health = $scope.calculateStats('FlatAttackSpeedMod', 'PercentMPRegenMod', 'totalAS');
            $scope.health = $scope.calculateStats('FlatCritChanceMod', 'PercentMPRegenMod', 'totalCrit');
            $scope.health = $scope.calculateStats('FlatCritDamageMod', 'PercentMPRegenMod', 'totalCritDmg');
            $scope.health = $scope.calculateStats('FlatMagicDamageMod', 'PercentMPRegenMod', 'totalAP');

        }
    }
});


