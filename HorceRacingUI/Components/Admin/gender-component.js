(function () {
    'use strict';

    angular.module('horseApp').component('gender', {
        controllerAs: 'vm',
        controller: function (adminService) {
            var vm = this;

            vm.horses = null;


            vm.$onInit = function () {
                adminService.showGenders().then(function (horses) {
                    vm.horses = horses;
                    console.log(horses);
                });
            }
        },

        templateUrl: '/Templates/Admin/gender-component.html'
    });
})();