(function () {
    'use strict';

    angular.module("horseApp").component("deleteHorse", {
        bindings: {
            horseId: '<'
        },
        controllerAs: 'vm',
        controller: function (horseService, $state) {
            var vm = this;

            vm.horse = {};

            vm.name = vm.horse.Name;


            // function to delete a horse
            vm.deleteHorse = function () {
                if (vm.horseId) {
                    horseService.deleteHorse(vm.horseId)
                        .then(function () {
                            $state.go("horses");
                        });

                }

            }
        },

        templateUrl: '/Templates/delete-horse-component.html'
    })
})();