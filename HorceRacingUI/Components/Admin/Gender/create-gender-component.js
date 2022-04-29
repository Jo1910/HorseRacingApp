(function() {
    'use strict';

    angular.module('horseApp').component('createGender', {
        controllerAs: 'vm',
        controller: function (adminService, dropdownService, $state) {

            var vm = this;

            vm.gender = {};

            vm.sexes = [];

            vm.saveGender = function (gender) {
                adminService.createGender(vm.gender)
                    .then(function () {
                        $state.go("admin");
                    });
            }

            dropdownService.getAllSexes()
                .then(function (sexes) {
                    vm.sexes = sexes;
                    console.log(sexes);
                });
        },
        templateUrl: '/Templates/Admin/Gender/create-gender-component.html'
    })
        
})();