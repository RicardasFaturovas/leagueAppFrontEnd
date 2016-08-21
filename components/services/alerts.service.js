'use strict';

angular.module('leagueApp').factory('alerts',[function(){

    var alerts = {
        differentPswSrv: 'Your password is does not match!',
        incorrectUsername: 'Username or e-mail is already used!',
        submitError: 'Oops! an error has occurred! Please try again.'
    };

    return {
        alerts: alerts
    }
}]);
