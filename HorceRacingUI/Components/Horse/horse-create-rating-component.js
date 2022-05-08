(function () {
    'use strict';

    angular.module("horseApp").component("createRating", {
        bindings: {
            horseId: '<'
        },
        controllerAs: 'vm',
        controller: function (horseService, dropdownService, $state) {
            var vm = this;

            vm.rating = {};
            vm.horse = {};

            vm.contacts = [];
            vm.horses = [];

            $('.datepicker').datepicker();


            // function to get a horse by Id
            vm.$onInit = function () {
                if (vm.horseId) {
                    horseService.getHorse(vm.horseId)
                        .then(function (horse) {
                            vm.horse = horse;
                            vm.rating.HorseId = angular.copy(vm.horse.Id);
                        });
                }
            }
           

            vm.saveRating = function () {
                horseService.createRating(vm.rating)
                    .then(function () {
                        $state.go("horses");
                    });
            }

            horseService.getAllHorses()
                .then(function (horses) {
                    vm.horses = horses;
                });

            dropdownService.getAllContacts()
                .then(function (contacts) {
                    vm.contacts = contacts;
                });


        },
        templateUrl: '/Templates/Horse/horse-create-rating-component.html'
    });
})();