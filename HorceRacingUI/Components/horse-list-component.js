(function () {
    'use strict';
    

    angular.module('horseApp').component('horseList', {
        controllerAs: 'vm',
        controller: function (horseService, $filter) {
            var vm = this;

            vm.horses = null;

            vm.minimumDate = function (year) {
                return new Date().getFullYear() - year;
            }


            vm.$onInit = function () {
                horseService.getAllHorses().then(function (horses) {
                    vm.horses = horses;
                    console.log(horses);
                });
            }
           
        },
        templateUrl: '/Templates/horse-list-component.html'
    })
})();