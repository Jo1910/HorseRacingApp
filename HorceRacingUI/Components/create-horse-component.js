(function () {
    'use strict';

    angular.module('horseApp').component('create', {
        controllerAs: 'vm',
        controller: function (horseService, colourService) {
            var vm = this;

            vm.colours = null;

            vm.$onInit = function () {
                colourService.getAllColours()
                    .then(function (colours) {
                        vm.colours = colours;
                        console.log(colours);
                    });
            }

            //vm.$onInit = function (horse) {
            //    horseService.createHorse(horse)
            //        .then(function () {
            //            horseService.getAllHorses();
            //        });
            //}

           
        },

        templateUrl: '/Templates/create-horse-component.html'
    });
})();