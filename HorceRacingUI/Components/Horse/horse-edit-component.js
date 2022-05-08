(function () {
    'use strict';

    angular.module('horseApp').component('edit', {
        bindings: {
            horseId: '<',
        },
        controllerAs: 'vm',
        controller: function (horseService, dropdownService, $state, $filter) {
            var vm = this;

            vm.horse = {};

            vm.colours = [];
            vm.categories = [];
            vm.genders = [];
            vm.countries = [];
            vm.acquisitions = [];
            vm.horses = [];
            vm.dams = [];
            vm.sires = [];

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
                        });
                }

            }



            $(document).ready(function () {
                $('.datepicker').datepicker({
                    onOpen: function () {
                        var instance = M.Datepicker.getInstance($('.datepicker'));
                        instance.options.maxDate = new Date();
                    }
                });
            });



            // Dropdowns
            dropdownService.getAllSires()
                .then(function (sires) {
                    vm.sires = sires;
                });

            dropdownService.getAllDams()
                .then(function (dams) {
                    vm.dams = dams;
                });

            dropdownService.getAllColours()
                .then(function (colours) {
                    vm.colours = colours;
                });

            dropdownService.getAllCategories()
                .then(function (categories) {
                    vm.categories = categories;
                });

            horseService.getAllHorses()
                .then(function (horses) {
                    vm.horses = horses;
                });

            dropdownService.getAllGenders()
                .then(function (genders) {
                    vm.genders = genders;
                });

            dropdownService.getAllCountries()
                .then(function (countries) {
                    vm.countries = countries;
                });

            dropdownService.getAllAcquisitions()
                .then(function (acquisitions) {
                    vm.acquisitions = acquisitions;
                });


            // Cancel form editing
            vm.cancel = function (editForm) {
                editForm.$setPristine();
                vm.horse = angular.copy(vm.originalHorse);
            };


            vm.submit = function (horse) {
                horseService.updateHorse(vm.horse)
                    .then(function () {
                        $state.go("horse", { horseId: vm.horse.Id });
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
        templateUrl: '/Templates/Horse/horse-edit-component.html'

    });
})();

