(function () {
    'use strict';

    angular.module('horseApp').component('horseList', {

        controller: function ($scope, $http) {

            $scope.horses = [];
            $http.get("https://localhost:44366/api/Horse").then(function (result) {
                console.log(result);
                //lower camel
                $scope.horses = result.data;
            })
        },

        templateUrl: '/Templates/horse-list-component.html',

    });
})();