(function () {
    'use strict';

    angular.module('horseApp').component('edit', {
        bindings: {
            horseId: '<',
        },
        controllerAs: 'vm',
        controller: function (horseService, dropdownService) {
            var vm = this;

            //vm.editForm = {};

            //vm.horse = {};

            //vm.colours = [];
            //vm.categories = [];
            //vm.genders = [];
            //vm.countries = [];
            //vm.acquisitions = [];
            //vm.horses = [];
            //vm.dams = [];
            //vm.sires = [];

            vm.$onInit = function () {
                if (vm.horseId) {
                    horseService.getHorse(vm.horseId)
                        .then(function (horse) {
                            vm.horse = horse;
                            vm.originalHorse = angular.copy(horse);
                            if (vm.horse.Id) {
                                vm.title = "Edit horse: " + vm.horse.Name;
                            }
                            else {
                                vm.title = "New Horse";
                            }
                            console.log(horse);
                        });
                   }
               
            }
            
          
            // Dropdowns
            dropdownService.getAllSires()
                .then(function (sires) {
                    vm.sires = sires;
                    console.log(sires);
                });

            dropdownService.getAllDams()
                .then(function (dams) {
                    vm.dams = dams;
                    console.log(dams);
                });

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


            // Cancel form editing
            vm.cancel = function (editForm) {
                editForm.$setPristine();
                vm.horse = angular.copy(vm.originalHorse);
            };




            //  update - put
            vm.submit = function (horse) {
                horseService.updateHorse(vm.horse)
                    .then(function () {
                        vm.getAllHorses();
                    });
            };

           
        },
        templateUrl: '/Templates/edit-horse-component.html'

    });
})();

