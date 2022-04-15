(function () {
    'use strict';

    angular.module('horseApp').component('create', {
        controllerAs: 'vm',
        controller: function (horseService, dropdownService, $http, apiBase) {
            var vm = this;

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
            

            vm.postdata = function (name, dateOfBirth, damId, sireId,
                colourId, categoryId, genderId, countryId,
                acquisitionId) {

                var data = {
                    name: vm.selectedName,
                    dateOfBirth: vm.selectedDate,
                    damId: vm.selectedDamId,
                    sireId: vm.selectedSireId,
                    colourId: vm.selectedColourId,
                    categoryId: vm.selectedCategoryId,
                    genderId: vm.selectedGenderId,
                    countryId: vm.selectedCountryId,
                    acquisitionId: vm.selectedAcquisitionId
                }

                //$http.post(apiBase + 'Horse/Post', data)
                //    .then(function (response) {
                //        console.log(response);
                //    });

                $http({
                    method: 'POST',
                    url: apiBase + 'Horse/Post',
                    data: data,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'key': '123'
                    }
                }).then(function (response) {
                    console.log(response);
                })

            }

            //vm.submit = function (data) {
            //    horseService.createHorse(data)
            //        .then(function () {
            //            vm.message = "... Save Complete";
            //        });
            //};

            //vm.submit = function (data) {
            //    return $http.post(apiBase + 'Horse/Post', data)
            //        .then(function (result) {
            //            return result.data;
            //        })

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