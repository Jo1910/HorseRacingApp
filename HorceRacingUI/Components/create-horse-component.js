(function () {
    'use strict';

    angular.module('horseApp').component('create', {
        controllerAs: 'vm',
        controller: function (horseService) {
            var vm = this;

            vm.colours = null;
            vm.categories = null;
            vm.genders = null;
            vm.countries = null;
            vm.acqusitions = null;

            vm.getColours = function () {
                horseService.getAllColours()
                    .then(function (colours) {
                        vm.colours = colours;
                        console.log(colours);
                    });
            }

            vm.getCategories = function () {
                horseService.getAllCategories()
                    .then(function (categories) {
                        vm.categories = categories;
                        console.log(categories);
                    });
            }

            vm.getGenders = function () {
                horseService.getAllGenders()
                    .then(function (genders) {
                        vm.genders = genders;
                        console.log(genders);
                    });
            }

            vm.getCountries = function () {
                horseService.getAllCountries()
                    .then(function (countries) {
                        vm.countries = countries;
                        console.log(countries);
                    });
            }

            vm.getAcqusitions = function () {
                horseService.getAllAcqusitions()
                    .then(function (acqusitions) {
                        vm.acqusitions = acqusitions;
                        console.log(acqusitions);
                    });
            }
           
        },

        templateUrl: '/Templates/create-horse-component.html'
    });
})();