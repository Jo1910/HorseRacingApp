(function () {
    'use strict';

    angular.module('horseApp').component('create', {
        controllerAs: 'vm',
        controller: function (horseService, dropdownService) {
            var vm = this;

            vm.colours = null;
            vm.categories = null;
            vm.genders = null;
            vm.countries = null;
            vm.acqusitions = null;
            vm.horses = null;

            vm.selectedColour = null;
            vm.selectedCategories = null;
            vm.selectedGenders = null
            vm.selectedCountries = null;
            vm.selectedAcqusitions = null;
            vm.selectedDam = null
            vm.selectedSire = null;

            dropdownService.getAllColours()
                .then(function (colours) {
                    vm.colours = colours;
                    console.log(colours);
                });

            dropdownService.getAllCategories()
                .then(function (categories) {
                    vm.categories = categories;
                    console.log(categories);
                });

            horseService.getAllHorses()
                .then(function (horses) {
                    vm.horses = horses;
                    console.log(horses);
                });

            dropdownService.getAllGenders()
                .then(function (genders) {
                    vm.genders = genders;
                    console.log(genders);
                });

            dropdownService.getAllCountries()
                .then(function (countries) {
                    vm.countries = countries;
                    console.log(countries);
                });

            dropdownService.getAllAcqusitions()
                .then(function (acqusitions) {
                    vm.acqusitions = acqusitions;
                    console.log(acqusitions);
                });

            //vm.getHorses = function () {
            //    horseService.getAllHorses()
            //        .then(function (horses) {
            //            vm.horses = horses;
            //            console.log(horses);
            //        });
            //}

            //vm.getColours = function () {
            //    dropdownService.getAllColours()
            //        .then(function (colours) {
            //            vm.colours = colours;
            //            console.log(colours);
            //        });
            //}

            //vm.getCategories = function () {
            //    dropdownService.getAllCategories()
            //        .then(function (categories) {
            //            vm.categories = categories;
            //            console.log(categories);
            //        });
            //}

            //vm.getGenders = function () {
            //    dropdownService.getAllGenders()
            //        .then(function (genders) {
            //            vm.genders = genders;
            //            console.log(genders);
            //        });
            //}

            //vm.getCountries = function () {
            //    dropdownService.getAllCountries()
            //        .then(function (countries) {
            //            vm.countries = countries;
            //            console.log(countries);
            //        });
            //}

            //vm.getAcqusitions = function () {
            //    dropdownService.getAllAcqusitions()
            //        .then(function (acqusitions) {
            //            vm.acqusitions = acqusitions;
            //            console.log(acqusitions);
            //        });
            //}
           
        },

        templateUrl: '/Templates/create-horse-component.html'
    });
})();