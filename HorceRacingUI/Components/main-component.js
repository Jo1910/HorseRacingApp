(function () {
    'use strict';

    angular.module('horseApp').component('mainComponent', {

        controller: function ($scope) {
            $scope.greeting = "Hello"
        },

        templateUrl: '/Templates/main-component.html'
    });
})();