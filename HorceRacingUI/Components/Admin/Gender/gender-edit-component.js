(function () {
    'use strict';

    angular.module("horseApp").component('editGender', {
        bindings: {
            genderId: '<'
        },
        controllerAs: 'vm',
        controller: function (adminService, dropdownService, $state) {
            var vm = this;

            vm.gender = {};

            vm.sexes = [];

            //vm.originalGender = angular.copy(vm.gender);


            // Get gender to edit
            vm.$onInit = function () {
                if (vm.genderId) {
                    adminService.getEditGender(vm.genderId)
                        .then(function (gender) {
                            vm.gender = gender;
                            vm.originalGender = angular.copy(gender);
                            if (vm.gender.Id) {
                                vm.title = "Edit gender: " + vm.gender.Name;
                            }
                            else {
                                vm.title = "New Gender";
                            }
                        });
                }
            }

            vm.cancel = function (editGenderForm) {
                editGenderForm.$setPristine();
                vm.gender = angular.copy(vm.originalGender);
            };

            dropdownService.getAllSexes()
                .then(function (sexes) {
                    vm.sexes = sexes;
                });

            vm.submit = function (gender) {
                adminService.updateGender(vm.gender)
                    .then(function () {
                        $state.go('gender', {genderId: vm.gender.Id});
                    });
            }

        },

        templateUrl: '/Templates/Admin/Gender/gender-edit-component.html'
    });
})();