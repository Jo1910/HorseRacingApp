﻿(function () {
    'use strict';

    angular.module('horseApp').component('create', {
        bindings: {
            horseId: '<',
        },
        controllerAs: 'vm',
        controller: function (horseService, dropdownService, $state) {
            

            var vm = this;

            vm.colours = null;
            vm.categories = null;
            vm.genders = null;
            vm.countries = null;
            vm.acquisitions = null;
            vm.horses = null;
          

            vm.horseId = 0;

            vm.selectedName = null;
            vm.selectedDate = null;
            vm.selectedDamId = null;
            vm.selectedSireId = null;
            vm.selectedColourId = null;
            vm.selectedCategoryId = null;
            vm.selectedGenderId = null
            vm.selectedCountryId = null;
            vm.selectedAcquisitionId = null;

            vm.saveHorse = function () {
                var data = {
                    Name: vm.selectedName,
                    DateOfBirth: vm.selectedDate,
                    DamId: vm.selectedDamId,
                    SireId: vm.selectedSireId,
                    ColourId: vm.selectedColourId,
                    CategoryId: vm.selectedCategoryId,
                    GenderId: vm.selectedGenderId,
                    CountryId: vm.selectedCountryId,
                    AcquisitionId: vm.selectedAcquisitionId
                };

                             
                var saveData = horseService.saveHorseData(data);
                saveData.then(function (response) {
                    console.log(response);
                    window.alert("Data saved.");
                    $state.reload();
                }, function (error) {
                    console.log("Something went wrong.")
                });

                               
            }


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

            dropdownService.getAllAcquisitions()
                .then(function (acquisitions) {
                    vm.acquisitions = acquisitions;
                    console.log(acquisitions);
                });                  
           
        },

        templateUrl: '/Templates/create-horse-component.html'
    });
})();