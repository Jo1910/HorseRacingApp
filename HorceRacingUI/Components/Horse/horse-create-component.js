(function () {
    'use strict';

    angular.module('horseApp').component('create', {
        controllerAs: 'vm',
        controller: function (horseService, dropdownService, $state) {

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
            vm.message = '';

            vm.originalHorse = angular.copy(vm.horse);

            //var today = new Date();
            //var mAge = 6;
            //vm.maxAge = new Date(today.getFullYear() - mAge, today.getMonth, today.getDate());


            vm.saveHorse = function (horse) {
                horseService.createHorse(vm.horse)
                    .then(function () {
                        $state.go("horses");
                    }, function (error) {
                        console.log(error.data.ModelState);
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

            vm.cancel = function (horseForm) {
                horseForm.$setPristine();
                vm.horse = angular.copy(vm.originalHorse);
            };

            $(document).ready(function () {
                $('select').formSelect();
                $('.datepicker').datepicker();
            });

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
           
        },

        templateUrl: '/Templates/Horse/horse-create-component.html'
    });
})();