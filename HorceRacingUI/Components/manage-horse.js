(function () {
    'use strict';

    angular.module('horseApp').component('manage', {
        bindings: {
            horseId: '<',
        },
        controllerAs: 'vm',
        controller: function (horseService, dropdownService) {
            var vm = this;
            vm.horse = {};
            vm.message = '';

            vm.colours = null;
            vm.categories = null;
            vm.genders = null;
            vm.countries = null;
            vm.acquisitions = null;
            vm.horses = null;


            vm.selectedName = null;
            vm.selectedDate = null;
            vm.selectedDamId = null;
            vm.selectedSireId = null;
            vm.selectedColourId = null;
            vm.selectedCategoryId = null;
            vm.selectedGenderId = null
            vm.selectedCountryId = null;
            vm.selectedAcquisitionId = null;

            horseService.getHorse({ id: horseId },
                function (data) {
                    vm.horse = data;
                    vm.originalHorse = angular.copy(data);

                });

            if (vm.horse && vm.horse.horseId) {
                vm.title = "Edit: " + vm.horse.Name;
            }
            else {
                vm.title = "New Horse";
            }

            vm.submit = function () {
                vm.message = '';
                if (vm.horse.horseId) {
                    horseService.updateHorse({ id: vm.horse.Id },
                        function (data) {
                            vm.message = "Save complete";
                        })
                }
                else {
                    horseService.saveSubscriber(
                        function (data) {
                            vm.originalHorse = angular.copy(data);
                            vm.message = "Save Complete";
                        })
                }
            };

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


            
        },
        templateUrl: '/Templates/manage-horse'
    })
})