'use strict';
angular.module('leagueApp').directive('navBar',[function(){
    return {
        templateUrl: 'components/directives/templates/navigation.bar.tmpl.html',
        controller: function ($scope) {
            /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
            $scope.responsiveNavBar = function(){
                var x = document.getElementById("navBar");
                if (x.className === "topnav") {
                    x.className += " responsive";
                } else {
                    x.className = "topnav";
                }
            }
        }
    }
}]);
