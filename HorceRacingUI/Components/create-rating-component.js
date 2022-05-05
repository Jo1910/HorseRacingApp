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

            // Get horse to rate
            vm.$onInit = function () {
                if (vm.horseId) {
                    horseService.getRateHorse(vm.horseId)
                        .then(function (horse) {
                            vm.horse = horse;
                            vm.originalHorse = angular.copy(horse);
                            //if (vm.horse.Id) {
                            //    vm.title = "Edit horse: " + vm.horse.Name;
                            //}
                            //else {
                            //    vm.title = "New Horse";
                            //}
                            console.log(horse);
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