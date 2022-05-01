(function () {
    'use strict';

    angular.module("horseApp").component('gender', {
        bindings: {
            genderId: '<'
        },
        controllerAs: 'vm',
        controller: function (adminService) {
            var vm = this;

            vm.gender = null;

            vm.$onInit = function () {
                if (vm.genderId) {
                    adminService.getGender(vm.genderId)
                        .then(function (gender) {
                            vm.gender = gender;
                            console.log(gender);
                        });
                }
            }

            // delete a gender
            vm.deleteGender = function () {
                if (vm.genderId) {
                    window.alert("Are you sure you want to delete this gender?");
                    adminService.deleteGender(vm.genderId)
                        .then(function () {
                            $state.go("genders");
                            console.log("Row deleted.");
                        });
                }
            }
        },

        templateUrl: '/Templates/Admin/Gender/gender-component.html'
    });
})();