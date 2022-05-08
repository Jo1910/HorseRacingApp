(function () {
    'use strict';

    angular.module('horseApp').component('lastRating', {
        bindings: {
            horseId: '<'
        },
        controllerAs: 'vm',
        controller: function (horseService, $state) {
            var vm = this;
            vm.rating = {};

            vm.$onInit = function () {
                if (vm.horseId) {
                    horseService.getLastRating(vm.horseId)
                        .then(function (rating) {
                            vm.rating = rating;
                        });
                }
            }
        },
        templateUrl: 'Templates/Horse/horse-get-rating-component.html'
    });
})();