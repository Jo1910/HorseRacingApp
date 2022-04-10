(function () {
    'use strict';

    angular.module('horseApp').component('horse', {
        bindings: {
            horseId: '<',
        },
        controllerAs: 'vm',
        controller: function (horseService) {
            var vm = this;

            vm.horse = null;

            vm.$onInit = function () {
                if (vm.horseId) {
                    horseService.getHorse(vm.horseId)
                        .then(function (horse) {
                            vm.horse = horse;
                            console.log(horse);
                        });
                }
            }
        },

        templateUrl: '/Templates/horse-component.html'

    });


})();