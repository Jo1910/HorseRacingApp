(function () {
    'use strict';

    angular.module('horseApp').component('create', {
        controllerAs: 'vm',
        controller: function (horseService) {
            var vm = this;

            vm.$onInit = function (horse) {
                horseService.createHorse(horse)
                    .then(function () {
                        horseService.getAllHorses();
                    });
            }

            vm.insert = function (horse) {
                horseService.createHorse(horse)
                    .then(function () {
                        horseService.getAllHorses();
                    })
            }
        },

        templateUrl: '/Templates/create-horse-component.html'
    });
})();