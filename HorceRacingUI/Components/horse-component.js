(function () {
    'use strict';

    angular.module('horseApp').component('horse', {
        bindings: {
            horseId: '<',
        },
        controllerAs: 'vm',
        controller: function (horseService, $state, $filter) {
            var vm = this;
            vm.horse = null;


            // function to get a horse by Id
            vm.$onInit = function () {
                if (vm.horseId) {
                    horseService.getHorse(vm.horseId)
                        .then(function (horse) {
                            vm.horse = horse;
                            console.log(horse);
                        });
                }
            }

            // function to delete a horse
            vm.deleteHorse = function () {
                if (vm.horseId) {
                    window.alert("Are you sure you want to delete this horse?");
                    horseService.deleteHorse(vm.horseId)
                        .then(function () {
                            $state.go("horses");
                            console.log("Row deleted.");
                        });

                }

            }
        },

        templateUrl: '/Templates/horse-component.html'

    });


})();