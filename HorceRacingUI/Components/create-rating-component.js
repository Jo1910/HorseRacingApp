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
                console.log("asd", vm.horseId);
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
                    console.log(horses);
                });

            dropdownService.getAllContacts()
                .then(function (contacts) {
                    vm.contacts = contacts;
                    console.log(contacts);
                });


        },
        templateUrl: '/Templates/create-rating-component.html'
    });
})();