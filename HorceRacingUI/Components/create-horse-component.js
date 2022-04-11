(function () {
    'use strict';

    angular.module('horseApp').component('create', {
        controllerAs: 'vm',
        controller: function (horseService, colourService, categoryService) {
            var vm = this;

            vm.colours = null;
            vm.categories = null;

            vm.getColours = function () {
                colourService.getAllColours()
                    .then(function (colours) {
                        vm.colours = colours;
                        console.log(colours);
                    });
            }

            vm.getCategories = function () {
                categoryService.getAllCategories()
                    .then(function (categories) {
                        vm.categories = categories;
                        console.log(categories);
                    });
            }
           
        },

        templateUrl: '/Templates/create-horse-component.html'
    });
})();