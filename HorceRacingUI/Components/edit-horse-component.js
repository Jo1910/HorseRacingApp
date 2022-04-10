(function () {
    'use strict';

    angular.module('horseApp').component('edit', {
        bindings: {
            horseId: '<',
        },
        controllerAs: 'vm',
        controller: function (horseService) {
            var vm = this;

            vm.horse = null;

            // edit - get
            vm.$onInit = function () {
                if (vm.horseId) {
                    horseService.editHorse(vm.horseId)
                        .then(function (horse) {
                            vm.horse = horse;
                            console.log(horse);
                        });
                }
            }

            // // update - put
            // vm.$onInit = function (horse) {
            //     horseService.updateHorse(horse)
            //         .then(function () {
            //             vm.getAllHorses();
            //         })
            // }
        },
        templateUrl: '/Templates/edit-horse-component.html'

    });
})();

