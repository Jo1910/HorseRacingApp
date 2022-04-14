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

            vm.$onInit = function () {
                if (vm.horseId) {
                    horseService.getHorse(vm.horseId)
                        .then(function (horse) {
                            vm.horse = horse;
                            vm.originalHorse = angular.copy(horse);
                            console.log(horse);
                        });
                }
            }
            
            if (vm.horse && vm.horse.Id) {
                vm.title = "Edit: " + vm.horse.Name;
            }
            else {
                vm.title = "New Horse";
            }

            vm.cancel = function (editForm) {
                editForm.$setPristine();
                vm.horse = angular.copy(vm.originalHorse);
            };


             // update - put
             //vm.submit = function (horse) {
             //    horseService.updateHorse(horse)
             //        .then(function () {
             //            vm.getAllHorses();
             //        })
             //}
        },
        templateUrl: '/Templates/edit-horse-component.html'

    });
})();

