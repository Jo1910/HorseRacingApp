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
        },

        templateUrl: '/Templates/Admin/Gender/gender-component.html'
    });
})();