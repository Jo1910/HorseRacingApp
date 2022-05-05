(function () {
    'use strict';

    angular.module('horseApp').component('edit', {
        bindings: {
            horseId: '<',
        },
        controllerAs: 'vm',
        controller: function (horseService, dropdownService, $state) {
            var vm = this;

            vm.horse = {};

            vm.horse.DateOfBirth = new Date(vm.horse.DateOfBirth);

            //vm.horse.dateOfBirth = $filter('date')(vm.horse.DateOfBirth, 'yyyy-MM-dd');
            vm.colours = [];
            vm.categories = [];
            vm.genders = [];
            vm.countries = [];
            vm.acquisitions = [];
            vm.horses = [];
            vm.dams = [];
            vm.sires = [];

            // Ui bootstrap datepicker
            vm.today = function () {
                vm.horse.DateOfBirth = new Date();
            }
            vm.dateFormat = "MM/dd/yyyy";
            vm.today();
            vm.showCalendar = function ($event) {
                vm.showDatepicker = true;
            };
            vm.showDatepicker = false;
            var maxDate = new Date();
            vm.max = maxDate;

            // get horse to edit
            vm.$onInit = function () {
                if (vm.horseId) {
                    horseService.getEditHorse(vm.horseId)
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

            $(document).ready(function () {
                $('select').formSelect();
            });

            $(document).ready(function () {
                $('.datepicker').datepicker();
            });
          
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


            vm.submit = function (horse) {
                horseService.updateHorse(vm.horse)
                    .then(function () {
                        $state.go("horse", {horseId: vm.horse.Id});
                    }, function (error) {
                        console.log(error);
                        if (error.data.ModelState) {
                            vm.errors = [];
                            for (var key in error.data.ModelState) {
                                for (var i = 0; i < error.data.ModelState[key].length; i++) {
                                    vm.errors.push(error.data.ModelState[key][i]);
                                }
                            }
                            return vm.errors;
                        }
                    });
            }

           
        },
        templateUrl: '/Templates/edit-horse-component.html'

    });
})();

