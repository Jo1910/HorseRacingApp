(function () {
    'use strict';

    angular.module('horseApp').component('genderList', {
        controllerAs: 'vm',
        controller: function (adminService) {
            var vm = this;

            vm.genders = null;


            vm.$onInit = function () {
                adminService.showGenders().then(function (genders) {
                    vm.genders = genders;
                });
            }
        },

        templateUrl: '/Templates/Admin/Gender/gender-list-component.html'
    });
})();