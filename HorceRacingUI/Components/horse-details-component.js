(function () {
    'use strict';

    angular.module('horseApp').component('horseDetails', {

        controller: function ($scope, $http) {
            $scope.horse = "";
            $http.get("https://localhost:44366/api/Horse/4").then(function (result) {
                console.log(result);

                $scope.horse = result.data;

            })
        },

        templateUrl: '/Templates/horse-details-component.html'
    });
})();